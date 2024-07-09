/** theme/Provider.tsx */

import { useState } from 'eact';
import { ThemeProvider } from 'tyled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyle } from './globalStyle';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviderComponent: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;