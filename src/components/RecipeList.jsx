import './RecipeList.css';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) return <p>No recipes found</p>;
  return (
    <div className="recipes-List">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method ? recipe.method.substring(0, 100) : ''}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
