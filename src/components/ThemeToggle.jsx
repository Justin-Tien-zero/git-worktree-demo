import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle btn"
            style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-border)', cursor: 'pointer', color: 'var(--color-text)' }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? (
                <span aria-hidden="true" style={{ fontSize: '1.25rem', lineHeight: 1 }}>🌙</span>
            ) : (
                <span aria-hidden="true" style={{ fontSize: '1.25rem', lineHeight: 1 }}>☀️</span>
            )}
        </button>
    );
}

export default ThemeToggle;
