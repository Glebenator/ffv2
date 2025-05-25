import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { Card } from '../common/Card';
import { Spacing, Typography, BorderRadius } from '../../constants/Colors';

interface ActivityItemProps {
  type: 'add' | 'remove';
  item: string;
  category: string;
  time: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  type,
  item,
  category,
  time,
}) => {
  const { colors } = useTheme();

  return (
    <Card style={styles.container} variant="elevated">
      <View style={[styles.iconContainer, { backgroundColor: colors.background.tertiary }]}>
        <Text style={styles.categoryIcon}>{category}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, { color: colors.text.primary }]}>
          <Text style={styles.action}>
            {type === 'add' ? 'Added ' : 'Removed '}
          </Text>
          {item}
        </Text>
        <Text style={[styles.time, { color: colors.text.tertiary }]}>
          {time}
        </Text>
      </View>
      <Ionicons
        name={type === 'add' ? 'add-circle' : 'remove-circle'}
        size={20}
        color={type === 'add' ? colors.status.success : colors.status.error}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  categoryIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: Typography.fontSize.sm,
    marginBottom: 2,
  },
  action: {
    fontWeight: Typography.fontWeight.semibold,
  },
  time: {
    fontSize: Typography.fontSize.xs,
  },
});