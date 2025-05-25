## Component Library

### Common Components
- **Button**: Customizable button with variants (primary, secondary, tertiary)
- **Card**: Container component with elevation and border options
- **Header**: App header with title, greeting, and theme toggle
- **ConnectionStatus**: Shows Raspberry Pi connection status
- **FAB**: Floating Action Button for primary actions
- **Section**: Reusable section layout with title and action

### Home Components
- **StatCard**: Statistics display with icon and value
- **CategoryCard**: Food category with emoji and item count
- **ActivityItem**: Recent activity list item

## Development Features

- **Modular Architecture**: All UI split into reusable components
- **Theme-aware Components**: Every component adapts to light/dark mode
- **TypeScript**: Full type safety across the application
- **Consistent Spacing**: Design tokens for consistent layouts
- **Responsive Design**: Adapts to different screen sizes# FridgeFriend v2 🥗

A smart kitchen companion app that connects to a Raspberry Pi 5 to track your fridge inventory, manage ingredients, and suggest recipes based on what you have.

## Features

- **Real-time Inventory Tracking**: Automatically tracks items going in and out of your fridge via Raspberry Pi
- **Smart Expiration Alerts**: Get notified before food expires
- **Recipe Suggestions**: Discover recipes based on available ingredients
- **Shopping Lists**: Automatic shopping list generation based on low stock
- **Category Management**: Organize items by categories (Vegetables, Dairy, Meat, etc.)

## Tech Stack

- **Frontend**: React Native + Expo
- **Navigation**: Expo Router (file-based routing)
- **Styling**: React Native StyleSheet with custom design system
- **Theme**: Light/Dark mode support with React Context
- **State Management**: React Context (for theme), AsyncStorage for persistence
- **Backend Integration**: Raspberry Pi 5 (connection setup in progress)
- **Platform**: iOS & Android

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your phone (for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Glebenator/ffv2.git
cd ffv2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or with tunnel for remote access
npm run start
```

4. Scan the QR code with:
- iOS: Camera app
- Android: Expo Go app

### Development Notes

**Expo Go Compatibility**: The app is designed to work with Expo Go for easy development. Some features like gradient backgrounds have been implemented using standard React Native styling to maintain compatibility.

**For Custom Native Features**: If you need features like linear gradients, custom native modules, or Raspberry Pi Bluetooth integration, you'll need to create a development build:
```bash
eas build --profile development
```

## Design System

### Colors
- **Primary**: Mint Green (#10B981) - Fresh and healthy
- **Secondary**: Orange (#F59E0B) - Appetizing and energetic
- **Accent**: Blue (#3B82F6) - Trust and reliability
- **Background**: Off-white (#FAFAF9) with white cards

### Dark Mode
- Fully supported with automatic system detection
- Manual toggle available in the header
- Optimized color palette for dark environments
- Persistent theme preference using AsyncStorage

### Typography
- Headers: Bold, rounded sans-serif
- Body: Clean sans-serif
- Numbers: Monospace (for quantities)

## Project Structure

```
ffv2/
├── app/                 # Main application screens
│   ├── _layout.tsx     # Root layout with ThemeProvider
│   └── index.tsx       # Home/Landing page
├── assets/             # Images, fonts, and other static assets
├── components/         # Reusable components
│   ├── common/         # Generic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ConnectionStatus.tsx
│   │   ├── FAB.tsx
│   │   ├── Header.tsx
│   │   └── Section.tsx
│   ├── home/           # Home screen specific components
│   │   ├── ActivityItem.tsx
│   │   ├── CategoryCard.tsx
│   │   └── StatCard.tsx
│   └── index.ts        # Component exports
├── constants/          # Theme, colors, and app constants
│   └── Colors.ts       # Color palette, spacing, typography
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme provider and dark mode logic
├── hooks/              # Custom React hooks (to be added)
└── utils/              # Helper functions (to be added)
```

## Upcoming Features

- [ ] Raspberry Pi connection setup
- [ ] Barcode scanning for adding items
- [ ] Voice input for hands-free operation
- [ ] Meal planning calendar
- [ ] Nutritional tracking
- [ ] Multi-user household support
- [ ] Export/Import shopping lists

## Development

### Building for Production

```bash
# Create a development build
eas build --profile development

# Create a production build
eas build --profile production
```

## Contributing

This is currently a private project. For access or contributions, please contact the repository owner.

## License

Private - All rights reserved