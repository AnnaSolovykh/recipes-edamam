 import Nutrients from "./Nutrients";
 import tick from "./tick.png";
 function RecipesComponent({recipesData}) {
    return(
        <div className="recipe">
            <h2>{recipesData.recipe.label}</h2>
            <a href={recipesData.recipe.url}><img className="dish-picture"  src={recipesData.recipe.image} alt="a dish"></img></a>
            <p>{recipesData.recipe.calories.toFixed()} calories in {recipesData.recipe.totalWeight.toFixed()} grams</p>
            <ul className="ingredients">
                {recipesData.recipe.ingredientLines.map( (ingredient, index) => (
                    <li key={index}><img className="tick-image" src={tick} alt="tick"/>{ingredient}</li>
                ))}
            </ul>
            <a href={recipesData.recipe.url}>Cooking instructions</a>

           <Nutrients nutrients={recipesData.recipe.totalNutrients}/>

        </div>
    )
}

export default RecipesComponent;