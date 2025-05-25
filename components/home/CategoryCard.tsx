import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { Card } from '../common/Card';
import { Spacing, Typography, BorderRadius } from '../../constants/Colors';

const { width } = Dimensions.get('window');

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  color: string;
  onPress?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  count,
  color,
  onPress,
}) => {
  const { colors, theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card style={styles.container} variant="elevated">
        <View 
          style={[
            styles.iconContainer,
            { backgroundColor: theme === 'light' ? `${color}20` : `${color}30` }
          ]}
        >
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={[styles.name, { color: colors.text.primary }]}>
          {name}
        </Text>
        <Text style={[styles.count, { color: colors.text.secondary }]}>
          {count} items
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width * 0.25,
    marginHorizontal: Spacing.xs,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  icon: {
    fontSize: 24,
  },
  name: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.semibold,
    marginBottom: Spacing.xs,
  },
  count: {
    fontSize: Typography.fontSize.xs,
  },
});