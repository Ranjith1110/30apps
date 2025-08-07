import GifGrid from '@/components/GifGrid';
import SearchBar from '@/components/SearchBar';
import React from 'react';

const Home = () => {
  const [query, setQuery] = React.useState('Happy');

  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-6 p-5">
      <h2 className="text-3xl font-bold">Gif Quest</h2>
      <SearchBar query={query} setQuery={setQuery} />
      <GifGrid query={query} />
    </div>
  );
};

export default Home;
