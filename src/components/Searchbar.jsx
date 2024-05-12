import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/?q=${search}`);
    setSearch('');
  };

  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            placeholder="Search for recipes..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
