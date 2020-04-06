import { useState, useEffect } from 'react';

const useStats = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    setError('');
    try {
      const api = await fetch(url);
      const data = await api.json();

      if (data.error) {
        setError(data.error.message);
      } else {
        setData(data);
      }
    } catch (error) {
      setError('Bad request');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [data, loading, error, fetchData];
};

export default useStats;

// import { useState, useEffect } from 'react';

// export default function useStats(url) {
//   const [stats, setStats] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(url).then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         }
//       });
//       setStats(data);
//     };
//     fetchData();
//   }, [url]);
//   return stats;
// }
