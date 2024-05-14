import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Searchbar';
import './Navbar.css';
import Searchbar from './Searchbar';

export const Navbar = () => {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: 'blue' }}>
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
