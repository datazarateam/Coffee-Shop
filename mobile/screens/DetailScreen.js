import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../theme/colors';
import { PrimaryButton } from '../components/PrimaryButton';
import { useApp } from '../context/AppContext';

export function DetailScreen({ navigation }) {
  const { currentCoffee } = useApp();

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.circleBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Text>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail</Text>
          <View style={styles.circleBtn}>
            <Text>♡</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={{ fontSize: 80 }}>☕</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.name}>{currentCoffee.name}</Text>
          <Text style={styles.sub}>{currentCoffee.sub}</Text>

          <View style={styles.meta}>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>4.8</Text>
              <Text style={styles.ratingCount}>(230)</Text>
            </View>
            <View style={styles.iconsRow}>
              {['🚴', '☕', '🧊'].map((e) => (
                <View key={e} style={styles.iconChip}>
                  <Text style={{ fontSize: 18 }}>{e}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descText}>
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
            espresso coffee and 85ml of fresh milk the fo…
            <Text style={styles.readMore}> Read More</Text>
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {['S', 'M', 'L'].map((s, i) => (
              <View
                key={s}
                style={[styles.sizeBtn, i === 1 ? styles.sizeBtnActive : null]}
              >
                <Text style={i === 1 ? styles.sizeTextActive : styles.sizeText}>
                  {s}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceBig}>$ 4.53</Text>
        </View>
        <PrimaryButton
          title="Buy Now"
          style={{ flex: 1, marginLeft: 20 }}
          onPress={() => navigation.navigate('Order')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.cream },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
    justifyContent: 'space-between',
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
  hero: {
    marginHorizontal: 24,
    borderRadius: 24,
    height: 200,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  body: {
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.dark,
  },
  sub: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 10,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: COLORS.star,
    marginRight: 6,
    fontSize: 18,
  },
  rating: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
  },
  ratingCount: {
    marginLeft: 4,
    fontSize: 13,
    color: COLORS.textLight,
  },
  iconsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  iconChip: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.peach,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.gray,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
    marginBottom: 8,
  },
  descText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  readMore: {
    color: COLORS.brown,
    fontWeight: '600',
  },
  sizeRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  sizeBtn: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    paddingVertical: 12,
    alignItems: 'center',
  },
  sizeBtnActive: {
    backgroundColor: COLORS.peach,
    borderColor: COLORS.brown,
  },
  sizeText: {
    color: COLORS.dark,
    fontWeight: '600',
  },
  sizeTextActive: {
    color: COLORS.brown,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
    backgroundColor: COLORS.cream,
  },
  priceLabel: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  priceBig: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.brown,
  },
});

