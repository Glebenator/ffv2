import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { BorderRadius, Spacing, Typography } from '../../constants/Colors';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
}) => {
  const { colors } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: BorderRadius.md,
      opacity: disabled || loading ? 0.6 : 1,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: colors.primary.default,
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: colors.secondary.default,
        };
      case 'tertiary':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.border.default,
        };
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: Typography.fontWeight.semibold,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          color: colors.text.inverse,
        };
      case 'secondary':
        return {
          ...baseStyle,
          color: variant === 'secondary' ? colors.text.inverse : colors.secondary.default,
        };
      case 'tertiary':
        return {
          ...baseStyle,
          color: colors.text.primary,
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          button: {
            paddingHorizontal: Spacing.md,
            paddingVertical: Spacing.sm,
            gap: Spacing.xs,
          },
          text: {
            fontSize: Typography.fontSize.sm,
          },
        };
      case 'medium':
        return {
          button: {
            paddingHorizontal: Spacing.lg,
            paddingVertical: Spacing.md,
            gap: Spacing.sm,
          },
          text: {
            fontSize: Typography.fontSize.md,
          },
        };
      case 'large':
        return {
          button: {
            paddingHorizontal: Spacing.xl,
            paddingVertical: Spacing.lg,
            gap: Spacing.sm,
          },
          text: {
            fontSize: Typography.fontSize.lg,
          },
        };
    }
  };

  const sizeStyles = getSizeStyle();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        getButtonStyle(),
        sizeStyles.button,
        fullWidth && styles.fullWidth,
        style,
      ]}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'tertiary' ? colors.text.primary : colors.text.inverse} 
          size="small" 
        />
      ) : (
        <>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[getTextStyle(), sizeStyles.text, textStyle]}>
            {children}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  iconContainer: {
    marginRight: 4,
  },
});