import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Spacing, Typography } from '../constants/Colors';
import {
  Header,
  ConnectionStatus,
  StatCard,
  CategoryCard,
  ActivityItem,
  Button,
  FAB,
  Section,
} from '../components';

// Mock data for demonstration
const mockStats = {
  totalItems: 47,
  expiringIn3Days: 3,
  lowStock: 5,
  freshItems: 12,
};

const recentActivity = [
  { id: 1, type: 'add' as const, item: 'Milk', category: '🥛', time: '2 min ago' },
  { id: 2, type: 'remove' as const, item: 'Tomatoes', category: '🍅', time: '1 hour ago' },
  { id: 3, type: 'add' as const, item: 'Chicken Breast', category: '🍗', time: '3 hours ago' },
];

const quickCategories = [
  { id: 1, name: 'Vegetables', icon: '🥬', count: 12, color: '#10B981' },
  { id: 2, name: 'Dairy', icon: '🥛', count: 8, color: '#3B82F6' },
  { id: 3, name: 'Meat', icon: '🥩', count: 6, color: '#EF4444' },
  { id: 4, name: 'Fruits', icon: '🍎', count: 9, color: '#F59E0B' },
];

export default function Home() {
  const { colors, theme } = useTheme();

  const getStatCardColors = (type: 'total' | 'expiring' | 'fresh') => {
    const lightColors = {
      total: { bg: '#E0F2FE', color: '#3B82F6' },
      expiring: { bg: '#FEF3C7', color: '#F59E0B' },
      fresh: { bg: '#ECFDF5', color: '#10B981' },
    };

    const darkColors = {
      total: { bg: '#1E3A5F', color: '#60A5FA' },
      expiring: { bg: '#451A03', color: '#FCD34D' },
      fresh: { bg: '#064E3B', color: '#34D399' },
    };

    return theme === 'light' ? lightColors[type] : darkColors[type];
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.primary }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header
          title="Your FridgeFriend"
          onSettingsPress={() => console.log('Settings pressed')}
        />

        {/* Connection Status */}
        <ConnectionStatus
          isConnected={true}
          onPress={() => console.log('Connection status pressed')}
        />

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <StatCard
            icon="cube-outline"
            value={mockStats.totalItems}
            label="Total Items"
            {...getStatCardColors('total')}
          />
          <StatCard
            icon="alert-circle-outline"
            value={mockStats.expiringIn3Days}
            label="Expiring Soon"
            {...getStatCardColors('expiring')}
          />
          <StatCard
            icon="checkmark-circle-outline"
            value={mockStats.freshItems}
            label="Fresh Items"
            {...getStatCardColors('fresh')}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Button
            onPress={() => console.log('Add item pressed')}
            variant="primary"
            icon={<Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />}
            fullWidth
          >
            Add Item
          </Button>
          <Button
            onPress={() => console.log('Recipes pressed')}
            variant="secondary"
            icon={<MaterialCommunityIcons name="chef-hat" size={24} color="#FFFFFF" />}
            fullWidth
          >
            Recipes
          </Button>
        </View>

        {/* Categories */}
        <Section
          title="Categories"
          onSeeAllPress={() => console.log('See all categories')}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScroll}
          >
            {quickCategories.map(category => (
              <CategoryCard
                key={category.id}
                name={category.name}
                icon={category.icon}
                count={category.count}
                color={category.color}
                onPress={() => console.log(`Category ${category.name} pressed`)}
              />
            ))}
          </ScrollView>
        </Section>

        {/* Recent Activity */}
        <Section
          title="Recent Activity"
          onSeeAllPress={() => console.log('View all activity')}
          seeAllText="View All"
        >
          <View style={styles.activityList}>
            {recentActivity.map(activity => (
              <ActivityItem
                key={activity.id}
                type={activity.type}
                item={activity.item}
                category={activity.category}
                time={activity.time}
              />
            ))}
          </View>
        </Section>

        {/* Add padding at bottom for FAB */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        icon="barcode-outline"
        onPress={() => console.log('Barcode scanner pressed')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    marginVertical: Spacing.md,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.xl,
    marginVertical: Spacing.md,
    gap: Spacing.md,
  },
  categoriesScroll: {
    paddingHorizontal: Spacing.lg,
  },
  activityList: {
    paddingHorizontal: Spacing.xl,
  },
});