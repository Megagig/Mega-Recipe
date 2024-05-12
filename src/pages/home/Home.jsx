import RecipeList from '../../components/RecipeList';
import useFetch from '../../hooks/useFetch';

import './Home.css';

const Home = () => {
  const url = 'http://localhost:3000/recipes';
  const { data: recipes, isPending, error } = useFetch(url);
  return (
    <div className="home">
      <h2>Recipes</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading ...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};
export default Home;
