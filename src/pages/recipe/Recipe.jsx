import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isLoading, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <p>{recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map((ingredient, recipe) => (
              <li key={recipe}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
