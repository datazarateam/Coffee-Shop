import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { COLORS } from '../theme/colors';

export function TrackingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        <View style={styles.headerRow}>
          <View style={styles.circleBtn} onTouchEnd={() => navigation.goBack()}>
            <Text>←</Text>
          </View>
          <Text style={styles.headerTitle}>Tracking Order</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.mapBox}>
          <Text style={{ color: COLORS.textLight }}>Map placeholder</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.time}>10 minutes left</Text>
          <Text style={styles.dest}>Delivery to Jl. Kpg Sutoyo</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.statusList}>
            <View style={styles.statusRow}>
              <View style={[styles.statusDot, { backgroundColor: COLORS.brown }]} />
              <View>
                <Text style={styles.statusTitle}>Your Order Placed</Text>
                <Text style={styles.statusSub}>
                  We will deliver your goods to you
                </Text>
              </View>
            </View>
            <View style={styles.statusRow}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: COLORS.brown, borderWidth: 4, borderColor: '#f2c8a0' },
                ]}
              />
              <View>
                <Text style={styles.statusTitle}>Delivered your order</Text>
                <Text style={styles.statusSub}>
                  We will deliver your goods to you to the address entered
                </Text>
              </View>
            </View>
            <View style={styles.statusRow}>
              <View style={[styles.statusDot, { backgroundColor: COLORS.gray }]} />
              <View>
                <Text style={[styles.statusTitle, { opacity: 0.5 }]}>Order received</Text>
                <Text style={[styles.statusSub, { opacity: 0.5 }]}>
                  Enjoy your coffee!
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.driverRow}>
            <View style={styles.driverAvatar}>
              <Text style={{ fontSize: 24 }}>👨‍🍳</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.driverName}>Brooklyn Simmons</Text>
              <Text style={styles.driverSub}>⭐ 4.9 · Coffee Rider</Text>
            </View>
            <View style={styles.callBtn}>
              <Text style={{ fontSize: 20 }}>📞</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.dark,
  },
  mapBox: {
    height: 220,
    borderRadius: 24,
    backgroundColor: '#e8e0d8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
  },
  time: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.dark,
    marginBottom: 4,
  },
  dest: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 18,
  },
  progressBar: {
    height: 6,
    backgroundColor: COLORS.gray,
    borderRadius: 3,
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    width: '70%',
    borderRadius: 3,
    backgroundColor: COLORS.brown,
  },
  statusList: {
    gap: 16,
    marginBottom: 20,
  },
  statusRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.dark,
  },
  statusSub: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
  },
  driverAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.brown,
    alignItems: 'center',
    justifyContent: 'center',
  },
  driverName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.dark,
  },
  driverSub: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  callBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.peach,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

