import React, { useState } from 'react';
import './SettingsDialog.css';

interface Theme {
  label: string;
  value: string;
}

interface AccountSetting {
  label: string;
  value: string;
}

const SettingsDialog: React.FC = () => {
  const [theme, setTheme] = useState<Theme>({ label: 'Light', value: 'light' });
  const [accountSettings, setAccountSettings] = useState<AccountSetting[]>([
    { label: 'Username', value: 'codeguru' },
    { label: 'Email', value: 'codeguru@example.com' },
  ]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme({ label: event.target.options[event.target.selectedIndex].text, value: event.target.value });
  };

  const handleAccountSettingChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountSettings((prevSettings) => {
      prevSettings[index].value = event.target.value;
      return [...prevSettings];
    });
  };

  const themes: Theme[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'High Contrast', value: 'high-contrast' },
  ];

  return (
    <div className="settings-dialog">
      <h2>Settings</h2>
      <form>
        <section>
          <h3>Theme</h3>
          <select value={theme.value} onChange={handleThemeChange}>
            {themes.map((themeOption) => (
              <option key={themeOption.value} value={themeOption.value}>
                {themeOption.label}
              </option>
            ))}
          </select>
        </section>
        <section>
          <h3>Account Settings</h3>
          <ul>
            {accountSettings.map((setting, index) => (
              <li key={index}>
                <label>
                  {setting.label}
                  <input
                    type="text"
                    value={setting.value}
                    onChange={(event) => handleAccountSettingChange(index, event)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </section>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsDialog;