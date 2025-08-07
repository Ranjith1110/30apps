import React from 'react';
import { fetchGifs } from '@/lib/gifhy';

interface Props {
  query: string;
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getGifs = async () => {
      setLoading(true);
      try {
        const res = await fetchGifs(query);
        setGifs(res);
      } catch (error) {
        console.log('Error fetching GIFS', error);
      } finally {
        setLoading(false);
      }
    };

    getGifs();
  }, [query]); // <- ✅ Add [query] so it refetches on input change

  if (loading) {
    return <p>Loading GIFs...</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
          className="rounded shadow"
        />
      ))}
    </div>
  );
};

export default GifGrid;
