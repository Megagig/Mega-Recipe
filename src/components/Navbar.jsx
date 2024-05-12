import { NavLink } from 'react-router-dom';
import './Searchbar';
import './Navbar.css';
import Searchbar from './Searchbar';

export const Navbar = () => {
  return (
    <div className="navbar">
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
