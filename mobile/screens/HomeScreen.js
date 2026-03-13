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

const COFFEES = [
  { name: 'Caffe Mocha', sub: 'Deep Foam', price: '4.53', emoji: '☕', rating: '4.8' },
  { name: 'Flat White', sub: 'Espresso', price: '3.53', emoji: '🍵', rating: '4.8' },
  { name: 'Cappuccino', sub: 'Classic', price: '3.99', emoji: '🥤', rating: '4.7' },
  { name: 'Americano', sub: 'Bold & Strong', price: '2.99', emoji: '☕', rating: '4.9' },
];

const CATEGORIES = ['All Coffee', 'Machiato', 'Latte', 'Americano', 'Espresso'];

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.locationLabel}>Location</Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationName}>Bilzen, Tanjungbalai</Text>
          <Text style={styles.locationChevron}>▼</Text>
        </View>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchPlaceholder}>Search coffee</Text>
        </View>
        <View style={styles.filterBtn}>
          <Text style={{ color: 'white' }}>☰</Text>
        </View>
      </View>

      <View
        style={styles.promoBanner}
        onTouchEnd={() => navigation.navigate('Detail')}
      >
        <Text style={styles.promoBadge}>Promo</Text>
        <Text style={styles.promoTitle}>Buy one get one FREE</Text>
        <Text style={styles.promoCup}>☕</Text>
      </View>

      <View style={styles.body}>
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.catRow}
          >
            {CATEGORIES.map((c, index) => (
              <View
                key={c}
                style={[
                  styles.catPill,
                  index === 0 ? styles.catPillActive : styles.catPillInactive,
                ]}
              >
                <Text
                  style={index === 0 ? styles.catTextActive : styles.catTextInactive}
                >
                  {c}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.grid}>
            {COFFEES.map((item) => (
              <View
                key={item.name}
                style={styles.card}
                onTouchEnd={() => navigation.navigate('Detail')}
              >
                <View style={styles.cardImage}>
                  <Text style={styles.cardEmoji}>{item.emoji}</Text>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingStar}>★</Text>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardSub}>{item.sub}</Text>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardPrice}>$ {item.price}</Text>
                    <View style={styles.addBtn}>
                      <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  locationLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  locationChevron: {
    color: COLORS.white,
    marginLeft: 6,
  },
  searchRow: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 8,
    color: 'rgba(255,255,255,0.6)',
  },
  searchPlaceholder: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
  },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.brown,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoBanner: {
    marginHorizontal: 24,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: COLORS.brown,
    padding: 20,
    overflow: 'hidden',
  },
  promoBadge: {
    backgroundColor: COLORS.red,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  promoTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '900',
    maxWidth: '60%',
  },
  promoCup: {
    position: 'absolute',
    right: 16,
    top: 30,
    fontSize: 72,
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.cream,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 18,
  },
  catRow: {
    marginBottom: 16,
  },
  catPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  catPillActive: {
    backgroundColor: COLORS.brown,
  },
  catPillInactive: {
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  catTextActive: {
    color: COLORS.white,
    fontWeight: '600',
  },
  catTextInactive: {
    color: 'rgba(0,0,0,0.5)',
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  card: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    height: 120,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardEmoji: {
    fontSize: 50,
  },
  ratingBadge: {
    position: 'absolute',
    right: 8,
    top: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingStar: {
    color: COLORS.star,
    marginRight: 3,
    fontSize: 12,
  },
  ratingText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '600',
  },
  cardInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.dark,
  },
  cardSub: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.dark,
  },
  addBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: COLORS.brown,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

