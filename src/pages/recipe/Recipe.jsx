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
          {recipe && recipe.ingredients && (
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          )}
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
