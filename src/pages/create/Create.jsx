import { useState, useRef } from 'react';
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, method, cookingTime, ingredients };
    console.log(newRecipe);
    setTitle('');
    setMethod('');
    setCookingTime(''); // clear the form after submission
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ingredient = newIngredient.trim();
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };
  return (
    <div className="create">
      <h2 className="page-title"> Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        {/* Ingredients go here */}
        <label htmlFor="ingredients">Recipe Ingredients</label>
        <div className="ingredients">
          <input
            type="text"
            id="ingredients"
            placeholder="Ingredients"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
          ></input>
          <button onClick={handleAdd} className="btn">
            Add
          </button>
        </div>
        <p>
          current Ingredients:{' '}
          {ingredients.map((ingredient, index) => (
            <em key={index}>{ingredient}, </em>
          ))}
        </p>

        <label htmlFor="method">Recipe Method</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        ></textarea>
        <label htmlFor="cookingTime">Cooking Time (in minuites): </label>
        <input
          type="number"
          id="cookingTime"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          required
        ></input>
        <button className="btn" type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
