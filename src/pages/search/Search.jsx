import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Search.css';

const Search = () => {
  const queryString = useLocation().search;

  // The URLSearchParams object is a built-in object that allows you to work with the query string of a URL. ?q=keyword
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = 'http://localhost:3000/recipes?q=' + query;
  const { data, error, isLoading } = useFetch(url);

  return (
    <div>
      <h2 className="page-title"> Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
