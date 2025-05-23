export const Colors = {
  primary: {
    default: '#10B981',
    dark: '#059669',
    light: '#34D399',
  },
  secondary: {
    default: '#F59E0B',
    dark: '#D97706',
    light: '#FCD34D',
  },
  accent: {
    default: '#3B82F6',
    dark: '#2563EB',
    light: '#60A5FA',
  },
  background: {
    primary: '#FAFAF9',
    secondary: '#FFFFFF',
    tertiary: '#F3F4F6',
  },
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  category: {
    vegetables: '#10B981',
    dairy: '#3B82F6',
    meat: '#EF4444',
    fruits: '#F59E0B',
    grains: '#8B5CF6',
    condiments: '#EC4899',
    beverages: '#06B6D4',
    frozen: '#6366F1',
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

export const Typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    xxxxl: 32,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;