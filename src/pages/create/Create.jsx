import { useState } from 'react';
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, method, cookingTime };
    console.log(newRecipe);
    setTitle('');
    setMethod('');
    setCookingTime(''); // clear the form after submission
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
