import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { Spacing, Typography } from '../../constants/Colors';

interface HeaderProps {
  greeting?: string;
  title: string;
  onSettingsPress?: () => void;
  showSettings?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  greeting = "Good morning! 👋",
  title,
  onSettingsPress,
  showSettings = true,
}) => {
  const { colors, theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.greeting, { color: colors.text.secondary }]}>
          {greeting}
        </Text>
        <Text style={[styles.title, { color: colors.text.primary }]}>
          {title}
        </Text>
      </View>
      {showSettings && (
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={toggleTheme}
          >
            <Ionicons 
              name={theme === 'light' ? 'moon-outline' : 'sunny-outline'} 
              size={24} 
              color={colors.text.primary} 
            />
          </TouchableOpacity>
          {onSettingsPress && (
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={onSettingsPress}
            >
              <Ionicons 
                name="settings-outline" 
                size={24} 
                color={colors.text.primary} 
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: Typography.fontSize.md,
    marginBottom: Spacing.xs,
  },
  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  iconButton: {
    padding: Spacing.sm,
  },
});