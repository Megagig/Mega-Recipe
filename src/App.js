import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipes from './pages/recipe/Recipe';
import Create from './pages/create/Create';

import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
