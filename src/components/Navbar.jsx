import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className="brand">
          <h1>Mega Recipe</h1>
        </NavLink>
        {/* <NavLink to="/search">Search</NavLink>
        <NavLink to="/recipes">Recipes</NavLink> */}
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  );
};
