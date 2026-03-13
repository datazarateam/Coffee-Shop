import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../theme/colors';
import { PrimaryButton } from '../components/PrimaryButton';

export function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.circle}>
          <Text style={styles.coffeeEmoji}>☕</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>
          Fall in Love with{'\n'}Coffee in Blissful Delight!
        </Text>
        <Text style={styles.text}>
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </Text>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  top: {
    flex: 2,
    backgroundColor: '#1a0a00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#3d1f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coffeeEmoji: {
    fontSize: 120,
  },
  bottom: {
    flex: 1.4,
    backgroundColor: COLORS.dark,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 12,
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 28,
  },
});

