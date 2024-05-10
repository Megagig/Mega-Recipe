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
      {recipes &&
        recipes.map((recipe) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })}
    </div>
  );
};
export default Home;
