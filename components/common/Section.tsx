import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from './Button';
import { Spacing, Typography } from '../../constants/Colors';

interface SectionProps {
  title: string;
  onSeeAllPress?: () => void;
  seeAllText?: string;
  children: React.ReactNode;
  style?: any;
}

export const Section: React.FC<SectionProps> = ({
  title,
  onSeeAllPress,
  seeAllText = 'See All',
  children,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text.primary }]}>
          {title}
        </Text>
        {onSeeAllPress && (
          <Button
            onPress={onSeeAllPress}
            variant="tertiary"
            size="small"
          >
            {seeAllText}
          </Button>
        )}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
  },
});