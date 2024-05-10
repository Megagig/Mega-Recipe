import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipes from './pages/recipe/Recipe';
import Create from './pages/create/Create';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <h1>Mega Recipe App</h1>
    </div>
  );
}

export default App;
