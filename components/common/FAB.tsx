import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { BorderRadius } from '../../constants/Colors';

interface FABProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
}

export const FAB: React.FC<FABProps> = ({
  onPress,
  icon,
  size = 28,
}) => {
  const { colors, shadows } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.fab,
        {
          backgroundColor: colors.primary.default,
        },
        shadows.xl,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={icon} size={size} color={colors.text.inverse} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});