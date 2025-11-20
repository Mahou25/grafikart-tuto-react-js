import { useEffect, useState } from "react";

/**
 * @param {string} url
 * @param {RequestInit} options
 */
export function useFetch(url, options = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    // Réinitialiser les états à chaque changement d'URL
    setLoading(true);
    setData(null);
    setErrors(null);

    fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        ...options.headers
      }
    })
      .then(r => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
      })
      .then(data => {
        setData(data);
      })
      .catch((e) => {
        setErrors(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]); // Dépendance sur l'URL uniquement

  return {
    loading,
    data,
    errors
  };
}