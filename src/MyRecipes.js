function MyRecipes({label, image, cuisineType, totalTime, totalWeight, yieldNumber, calories, ingredients}) {
    return(<div className="container">
        <div>
        <h2>{label}</h2>
        </div>

        <div>
        <img className="tasty" src={image} alt="recipe" />
        </div>

<div className="capdProducts">
        <div>
            <h4>Type of kitchen: {cuisineType}</h4>
        </div>

        <div className="values">
        <h5>{calories.toFixed()} calories</h5>
        <h5>{totalTime} min</h5>
        <h5>{totalWeight.toFixed()} g</h5>
        <h5>{yieldNumber.toFixed()} portion</h5>
        </div>

        <ul className="list">
            {ingredients.map((ingredient, index) => (
                <li key={index}> <img src="https://img.icons8.com/external-creatype-flat-colourcreatype/64/null/external-recipe-cooking-and-kitchen-creatype-flat-colourcreatype.png" className="icon" alt="icons"/> {ingredient}</li>
            ))}
        </ul>

        </div>
    </div>
    )
}
export default MyRecipes;