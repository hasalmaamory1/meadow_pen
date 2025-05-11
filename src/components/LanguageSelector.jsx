import React from 'react';

export default function LanguageSelector({ onSelectLanguage }) {
  const languages = ['en', 'es', 'fr', 'de', 'ja', 'zh'];

  return (
    <select onChange={(e) => onSelectLanguage(e.target.value)} className="input">
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}