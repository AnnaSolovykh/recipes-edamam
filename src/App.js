import { useEffect, useState } from 'react';
import './App.css';
import video from './cherries.mp4';
import search from './search.png';
import RecipesComponent from './RecipesComponent';

function App() {

  const MY_ID = "5e27a2c5";
  const MY_KEY = "c3827637dd90d691e2b3dcc50a72ef1e";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("cherry");

  useEffect( ()=> {
    const getRecipe = async() => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe();
    
  }, [wordSubmitted]
  ) 

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <header>
        <div className='container'> 
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Recipe Book</h1>
        </div>
        
        <div className='container'>
          <form onSubmit={finalSearch}>
            <input className='search' placeholder='Search...' onChange={myRecipeSearch}></input>
            <button className='btn'><img src={search} alt="search"/></button>
          </form>
        </div>
      </header>

      <section>
        <div className='recipes'>
          {myRecipes.map( (element, index) => (
            <RecipesComponent key={index} recipesData={element}/>
          )

          )}
        </div>
      </section>
    </div>
  );
}

export default App;
