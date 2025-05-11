import { useState } from 'react';

export default function useCloudStorage() {
  const [loading, setLoading] = useState(false);

  const saveDraft = async (title, content) => {
    setLoading(true);
    try {
      localStorage.setItem(`draft_${title}`, content);
      console.log('Draft saved to local cloud storage');
    } finally {
      setLoading(false);
    }
  };

  const getDraft = (title) => {
    return localStorage.getItem(`draft_${title}`);
  };

  return { saveDraft, getDraft, loading };
}