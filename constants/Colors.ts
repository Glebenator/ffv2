export const Colors = {
  light: {
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
      card: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      tertiary: '#9CA3AF',
      inverse: '#FFFFFF',
    },
    border: {
      default: '#E5E7EB',
      light: '#F3F4F6',
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
    shadow: '#000000',
  },
  dark: {
    primary: {
      default: '#10B981',
      dark: '#34D399',
      light: '#059669',
    },
    secondary: {
      default: '#F59E0B',
      dark: '#FCD34D',
      light: '#D97706',
    },
    accent: {
      default: '#60A5FA',
      dark: '#93BBFC',
      light: '#3B82F6',
    },
    background: {
      primary: '#0F0F0F',
      secondary: '#1A1A1A',
      tertiary: '#262626',
      card: '#1A1A1A',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
      tertiary: '#9CA3AF',
      inverse: '#1F2937',
    },
    border: {
      default: '#374151',
      light: '#1F2937',
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#60A5FA',
    },
    category: {
      vegetables: '#34D399',
      dairy: '#60A5FA',
      meat: '#F87171',
      fruits: '#FCD34D',
      grains: '#A78BFA',
      condiments: '#F9A8D4',
      beverages: '#67E8F9',
      frozen: '#818CF8',
    },
    shadow: '#000000',
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

export const Shadows = {
  light: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  dark: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 4,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    },
  },
} as const;