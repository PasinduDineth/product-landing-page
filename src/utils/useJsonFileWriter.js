import { useState, useCallback } from 'react';

const useJsonFileWriter = () => {
  const [error, setError] = useState(null);

  const saveJsonToFile = useCallback(async (key, value, filePath) => {
    try {
      const response = await fetch('http://localhost:3001/api/updateJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: key,
          value:value,
          path: filePath,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to save JSON: ${response.statusText}`);
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return {
    saveJsonToFile,
    error,
  };
};

export default useJsonFileWriter;
