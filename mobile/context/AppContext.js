import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { initDb, getItem, setItem } from '../db/database';
import { COLORS } from '../theme/colors';

const AppContext = createContext(null);

const DEFAULT_ADDRESS = 'Kpg. Sutoyo No.620, Bilzen, Tanjungbalai';
const DEFAULT_COFFEE = {
  name: 'Caffe Mocha',
  sub: 'Deep Foam',
  price: 4.53,
  emoji: '☕',
  rating: '4.8',
};

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState(DEFAULT_ADDRESS);
  const [note, setNote] = useState('');
  const [currentCoffee, setCurrentCoffee] = useState(DEFAULT_COFFEE);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        await initDb();
        const saved = await getItem('state');
        if (saved && isMounted) {
          try {
            const parsed = JSON.parse(saved);
            if (parsed.address) setAddress(parsed.address);
            if (parsed.note) setNote(parsed.note);
            if (parsed.currentCoffee) setCurrentCoffee(parsed.currentCoffee);
            if (parsed.quantity) setQuantity(parsed.quantity);
          } catch {
            // ignore parse errors and keep defaults
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    const state = {
      address,
      note,
      currentCoffee,
      quantity,
    };
    setItem('state', JSON.stringify(state)).catch(() => {});
  }, [address, note, currentCoffee, quantity, loading]);

  const selectCoffee = (coffee) => {
    setCurrentCoffee({
      name: coffee.name ?? DEFAULT_COFFEE.name,
      sub: coffee.sub ?? DEFAULT_COFFEE.sub,
      emoji: coffee.emoji ?? DEFAULT_COFFEE.emoji,
      rating: coffee.rating ?? DEFAULT_COFFEE.rating,
      price: parseFloat(coffee.price ?? DEFAULT_COFFEE.price),
    });
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity((q) => q + 1);
  };

  const decrementQuantity = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const value = {
    loading,
    address,
    setAddress,
    note,
    setNote,
    currentCoffee,
    selectCoffee,
    quantity,
    incrementQuantity,
    decrementQuantity,
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.dark,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color={COLORS.brown} />
      </View>
    );
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}

