/** theme/Switcher.tsx */

import React from 'react';
import { useTheme } from 'styled-components';
import { lightTheme } from '../themes';

interface SwitcherProps {
  onChange: (theme: 'light' | 'dark') => void;
}

const Switcher: React.FC<SwitcherProps> = ({ onChange }) => {
  const theme = useTheme();

  const handleToggle = () => {
    onChange(theme === lightTheme ? 'dark' : 'light');
  };

  return (
    <button onClick={handleToggle}>
      {theme === lightTheme ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default Switcher;