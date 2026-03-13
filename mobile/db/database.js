import * as SQLite from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';

let dbInstance;
let dbHealthy = false;

function tryGetDb() {
  if (!SQLite || typeof SQLite.openDatabase !== 'function') {
    return null;
  }
  if (!dbInstance) {
    dbInstance = SQLite.openDatabase('javagem.db');
  }
  return dbInstance;
}

export async function initDb() {
  return new Promise((resolve) => {
    const db = tryGetDb();
    if (!db) {
      dbHealthy = false;
      resolve(false);
      return;
    }

    db.transaction(
      (tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS app_state (key TEXT PRIMARY KEY NOT NULL, value TEXT);',
          []
        );
      },
      () => {
        dbHealthy = false;
        resolve(false);
      },
      async () => {
        dbHealthy = true;

        try {
          const buffered = await AsyncStorage.getItem('app_state_fallback');
          if (buffered != null) {
            await setItem('state', buffered);
          }
        } catch {
          // ignore sync errors
        }

        resolve(true);
      }
    );
  });
}

export function getItem(key) {
  const db = dbHealthy ? tryGetDb() : null;

  if (!db) {
    return AsyncStorage.getItem('app_state_fallback');
  }

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT value FROM app_state WHERE key = ?;',
          [key],
          (_, result) => {
            if (result.rows.length > 0) {
              resolve(result.rows.item(0).value);
            } else {
              resolve(null);
            }
          }
        );
      },
      (error) => reject(error)
    );
  });
}

export async function setItem(key, value) {
  await AsyncStorage.setItem('app_state_fallback', value);

  const db = dbHealthy ? tryGetDb() : null;
  if (!db) return;

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT OR REPLACE INTO app_state (key, value) VALUES (?, ?);',
          [key, value]
        );
      },
      (error) => reject(error),
      () => resolve()
    );
  });
}


