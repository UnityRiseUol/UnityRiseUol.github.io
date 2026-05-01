# Light/Dark Mode Implementation

## Overview
A complete light/dark mode system has been implemented that:
- ✅ Detects user's system preference on first visit
- ✅ Allows manual theme toggle via a button in the navbar
- ✅ Persists user preference to localStorage
- ✅ Applies smooth transitions between themes
- ✅ Works on all screen sizes (desktop and mobile)

## Files Created/Modified

### Created Files:
1. **`src/context/ThemeContext.jsx`** - Theme context provider
   - Manages theme state (light/dark)
   - Detects system preference on first load
   - Persists user choice to localStorage
   - Provides `useTheme()` hook

### Modified Files:

2. **`src/main.jsx`**
   - Added ThemeProvider wrapper around the app
   - Ensures theme context is available throughout the app

3. **`src/components/Navbar.jsx`**
   - Imported `useTheme()` hook
   - Added theme toggle button with sun (☀️) and moon (🌙) emojis
   - Button appears in the navbar header on all screen sizes

4. **`src/index.css`**
   - Added CSS variables for light theme (`:root[data-theme="light"]`)
   - Updated dark theme variables (`:root[data-theme="dark"]`)
   - All color values now use CSS variables for easy theming
   - Added smooth transitions between theme changes

5. **`src/components/Navbar.css`**
   - Added `.theme-toggle` styling with hover effects
   - Updated navbar, logo, and links to use CSS variables
   - Added light mode styles for all navbar elements
   - Mobile menu updated for light mode support
   - Hamburger icon bars change color in light mode

## How It Works

1. **System Detection**: On first visit, the app checks `prefers-color-scheme` media query
2. **User Toggle**: Click the sun (☀️) or moon (🌙) button to switch themes
3. **Persistence**: Choice is saved to localStorage and restored on future visits
4. **Styling**: All components use CSS variables that change with the theme

## CSS Variables Available

### Light Mode (data-theme="light")
```css
--bg-dark: #f8fafc;           /* Light background */
--bg-card: #e2e8f0;           /* Light card background */
--accent: #0284c7;            /* Darker blue */
--text-main: #0f172a;         /* Dark text */
--text-muted: #475569;        /* Darker gray */
```

### Dark Mode (data-theme="dark")
```css
--bg-dark: #0f172a;           /* Deep navy/black */
--bg-card: #1e293b;           /* Slightly lighter cards */
--accent: #38bdf8;            /* Electric blue */
--text-main: #f1f5f9;         /* Off-white */
--text-muted: #94a3b8;        /* Gray */
```

## Theme Toggle Button Location
- **Desktop**: Top right of navbar (before hamburger menu on mobile)
- **Mobile**: Responsive and accessible on all screen sizes
- **Hover Effect**: Highlights with a semi-transparent colored background

## Usage in Components

To use the theme in any component:

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>{isDark ? 'Dark mode' : 'Light mode'}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

To style components based on theme, use CSS variables:

```css
.my-component {
  background-color: var(--bg-dark);
  color: var(--text-main);
}
```

