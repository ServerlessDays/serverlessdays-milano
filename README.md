# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# To start

- To install packages: `npm install`
- To run in preview mode: `npm run dev`
- To run in preview mode on the network: `npm run dev:host`
- To build the application: `npm run build`

# Presentation Display View

The application now includes a special presentation view optimized for large displays (16:9 or 9:16 aspect ratios) that can be used outside conference rooms.

## Features

- **Real-time agenda display**: Shows current and next sessions for both Main Stage and Discovery Track
- **Adaptive layout**: Automatically adjusts for 16:9 (landscape) and 9:16 (portrait) displays
- **Live updates**: Updates every 30 seconds to show current time and session status
- **Large, readable text**: Optimized for visibility from a distance
- **Clean, modern design**: Dark theme with high contrast for better readability

## Access

### Current Sessions View
- **URL**: `/presentation` or `/presentation/current`
- **Navigation**: Available through the "📺 Display View" link in the navbar
- **Direct link**: `http://localhost:5173/presentation/current` (during development)
- **Purpose**: Shows what's happening NOW and what's UP NEXT

### Full Agenda View
- **URL**: `/presentation/full`
- **Navigation**: Available through the "📋 Full Agenda" button in the current sessions view
- **Direct link**: `http://localhost:5173/presentation/full` (during development)
- **Purpose**: Shows complete agenda with auto-switching between pages every 30 seconds

## Usage

Perfect for displaying outside conference rooms to help attendees see:

- What's currently happening in each room
- What's coming up next
- Session times and speakers
- Real-time clock

The display automatically adapts to different screen orientations and sizes, making it suitable for various display setups.
