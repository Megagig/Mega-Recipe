import { NavLink } from 'react-router-dom';

import './Searchbar';
import './Navbar.css';
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';

export const Navbar = () => {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>Mega Recipe</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  );
};
