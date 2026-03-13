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
import { PrimaryButton } from '../components/PrimaryButton';

export function OrderScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        <View style={styles.headerRow}>
          <View style={styles.circleBtn} onTouchEnd={() => navigation.goBack()}>
            <Text>←</Text>
          </View>
          <Text style={styles.headerTitle}>Order</Text>
          <View style={{ width: 40 }} />
        </View>

        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressCard}>
          <Text style={styles.addrName}>Jl. Kpg Sutoyo</Text>
          <Text style={styles.addrDetail}>
            Kpg. Sutoyo No.620, Bilzen, Tanjungbalai
          </Text>
          <View style={styles.addrActions}>
            <View style={styles.addrBtn}>
              <Text>✏️ Edit Address</Text>
            </View>
            <View style={styles.addrBtn}>
              <Text>📝 Add Note</Text>
            </View>
          </View>
        </View>

        <View style={styles.itemRow}>
          <View style={styles.itemIcon}>
            <Text style={{ fontSize: 26 }}>☕</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Caffe Mocha</Text>
            <Text style={styles.itemSub}>Deep Foam</Text>
          </View>
          <View style={styles.qtyRow}>
            <Text style={styles.qtyMinus}>−</Text>
            <Text style={styles.qtyValue}>1</Text>
            <Text style={styles.qtyPlus}>+</Text>
          </View>
        </View>

        <View style={styles.paymentCard}>
          <Text style={styles.paymentTitle}>Payment Summary</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Price</Text>
            <Text style={styles.paymentValue}>$ 4.53</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Delivery Fee</Text>
            <Text>
              <Text style={styles.paymentStrike}>$ 2.0 </Text>
              <Text style={styles.paymentDiscount}>$ 1.0</Text>
            </Text>
          </View>
        </View>

        <View style={styles.paymentMethod}>
          <View style={styles.payIcon}>
            <Text>💳</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.payMethod}>Cash/Wallet</Text>
            <Text style={styles.payAmount}>$ 5.53</Text>
          </View>
          <Text style={{ color: COLORS.textLight }}>⌄</Text>
        </View>

        <PrimaryButton
          title="Order"
          onPress={() => navigation.navigate('Tracking')}
        />
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
    marginBottom: 8,
  },
  addressCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  addrName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: 4,
  },
  addrDetail: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 12,
  },
  addrActions: {
    flexDirection: 'row',
    gap: 10,
  },
  addrBtn: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  itemRow: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemIcon: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.dark,
  },
  itemSub: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyMinus: {
    color: COLORS.textLight,
    fontSize: 18,
  },
  qtyValue: {
    fontWeight: '600',
    fontSize: 16,
  },
  qtyPlus: {
    color: COLORS.brown,
    fontSize: 20,
  },
  paymentCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
    marginBottom: 12,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  paymentLabel: {
    color: COLORS.textLight,
  },
  paymentValue: {
    color: COLORS.dark,
    fontWeight: '600',
  },
  paymentStrike: {
    textDecorationLine: 'line-through',
    color: COLORS.textLight,
  },
  paymentDiscount: {
    color: COLORS.brown,
    fontWeight: '600',
  },
  paymentMethod: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  payIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.peach,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  payMethod: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.dark,
  },
  payAmount: {
    fontSize: 13,
    color: COLORS.textLight,
  },
});

