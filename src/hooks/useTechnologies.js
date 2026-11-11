import { useEffect, useState } from 'react';

const DATA_URL = `${import.meta.env.BASE_URL}data/technologies.json`;

/**
 * Fetches the technology list from public/data/technologies.json
 * and exposes loading / error state plus a retry helper.
 */
export default function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(DATA_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => setTechnologies(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [attempt]);

  return { technologies, loading, error, retry: () => setAttempt((n) => n + 1) };
}
