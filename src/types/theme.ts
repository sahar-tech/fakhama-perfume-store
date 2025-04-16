export type Theme = 'light' | 'dark';
export type ThemeType = Theme | 'system';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  resolvedTheme: Theme;
  themes: Theme[];
  systemTheme?: Theme;
}

// Optional: Type for your theme configuration
export interface ThemeConfig {
  light: {
    [key: string]: string;
  };
  dark: {
    [key: string]: string;
  };
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
    // Add other color keys as needed
  };
}