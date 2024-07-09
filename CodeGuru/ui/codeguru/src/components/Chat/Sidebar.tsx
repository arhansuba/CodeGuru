import React, { useState, useEffect } from 'react';
import './Sidebar.css';

interface Shortcut {
  label: string;
  icon: string;
  url: string;
}

interface RecentSearch {
  query: string;
  timestamp: number;
}

const Sidebar: React.FC = () => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([
    { label: 'Dashboard', icon: 'fas fa-home', url: '/dashboard' },
    { label: 'Search', icon: 'fas fa-search', url: '/search' },
    { label: 'Settings', icon: 'fas fa-cog', url: '/settings' },
  ]);

  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const handleSearch = (query: string) => {
    const newSearch: RecentSearch = { query, timestamp: Date.now() };
    setRecentSearches((prevSearches) => [...prevSearches, newSearch]);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  };

  return (
    <div className="sidebar">
      <h2>Shortcuts</h2>
      <ul>
        {shortcuts.map((shortcut) => (
          <li key={shortcut.url}>
            <a href={shortcut.url}>
              <i className={shortcut.icon} />
              <span>{shortcut.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <h2>Recent Searches</h2>
      <ul>
        {recentSearches.map((search) => (
          <li key={search.timestamp}>
            <a href={`/search?q=${search.query}`}>
              <span>{search.query}</span>
              <span className="timestamp">{new Date(search.timestamp).toLocaleString()}</span>
            </a>
          </li>
        ))}
      </ul>
      <h2>Contextual Info</h2>
      <p>Logged in as <strong>codeguru</strong></p>
      <p>Last active: <strong>{new Date().toLocaleString()}</strong></p>
    </div>
  );
};

export default Sidebar;