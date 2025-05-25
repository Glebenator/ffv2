import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { Card } from './Card';
import { Spacing, Typography, BorderRadius } from '../../constants/Colors';

interface ConnectionStatusProps {
  isConnected: boolean;
  deviceName?: string;
  onPress?: () => void;
}

export const ConnectionStatus: React.FC<ConnectionStatusProps> = ({
  isConnected,
  deviceName = 'Raspberry Pi',
  onPress,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card style={styles.card} variant="elevated">
        <View style={styles.statusContainer}>
          <View 
            style={[
              styles.statusDot,
              { backgroundColor: isConnected ? colors.status.success : colors.status.error }
            ]} 
          />
          <Text style={[styles.statusText, { color: colors.text.primary }]}>
            {isConnected ? `Connected to ${deviceName}` : 'Not Connected'}
          </Text>
        </View>
        <Ionicons 
          name="chevron-forward" 
          size={20} 
          color={colors.text.tertiary} 
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Spacing.xl,
    marginVertical: Spacing.md,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: BorderRadius.full,
    marginRight: Spacing.sm,
  },
  statusText: {
    fontSize: Typography.fontSize.sm,
  },
});