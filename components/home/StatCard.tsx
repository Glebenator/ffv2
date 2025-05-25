import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { Spacing, Typography, BorderRadius } from '../../constants/Colors';

interface StatCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  value: number;
  label: string;
  color: string;
  backgroundColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  color,
  backgroundColor,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Ionicons name={icon} size={28} color={color} />
      <Text style={[styles.value, { color: colors.text.primary }]}>
        {value}
      </Text>
      <Text style={[styles.label, { color: colors.text.secondary }]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.xs,
  },
  value: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    marginTop: Spacing.sm,
  },
  label: {
    fontSize: Typography.fontSize.xs,
    marginTop: Spacing.xs,
  },
});