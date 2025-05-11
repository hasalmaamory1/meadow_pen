import { useState } from 'react';

export default function useCollaboration() {
  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(false);

  const addCollaborator = async (email) => {
    setLoading(true);
    try {
      // Simulate adding collaborator
      setCollaborators((prev) => [...prev, email]);
    } finally {
      setLoading(false);
    }
  };

  return { collaborators, addCollaborator, loading };
}