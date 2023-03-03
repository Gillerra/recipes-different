import './App.css';
import { useEffect, useState } from 'react';
import video from "./philippine.mp4";
import MyRecipes from './MyRecipes';

function App() {

  const MY_ID = "bba74c1d";
  const MY_KEY = "6cc1becb740537aa5cd558e2eee1e4da";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('pepper');

  useEffect(() => {
    const getApi = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }
    getApi();
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">

  <div className="container">
  <video autoPlay muted loop>
  <source src={video} type="video/mp4" />
  </video>
  <h1>RECIPES for every taste</h1>
  </div>
    
  <div className='recipeSearch'>
  <form onSubmit={finalSearch}>
    <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
    </input>
    <button>
      <img src='https://img.icons8.com/dusk/64/null/search--v1.png' className='icons' alt="search"/>
    </button>
  </form>
  </div>

    <div>
  {myRecipes.map((element, index) => (
    <MyRecipes key={index}
    label={element.recipe.label}
    image={element.recipe.image} 
    cuisineType={element.recipe.cuisineType}
    totalTime={element.recipe.totalTime}
    totalWeight={element.recipe.totalWeight}
    yieldNumber={element.recipe.yield}
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}
    />
    ))}
</div>

  </div>
  );
}

export default App;


