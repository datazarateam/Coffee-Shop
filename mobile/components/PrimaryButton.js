import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export function PrimaryButton({ title, style, textStyle, ...props }) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.brown,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

