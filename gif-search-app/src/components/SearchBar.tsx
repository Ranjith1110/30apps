import React from 'react';
import { Input } from '@/components/ui/input';

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search for a mood (e.g., Happy)"
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-md shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
