import Recipe from '../Recipes'
function RecipeList({recipes, setRecipes}) {

    return(
        <div className="recipe-list">
            {/* map through recipes and if the recipe.display is true, return each recipe as a new recipe component  */}
            {recipes.map((recipe, idx) => {
                if(recipe.display){
                    
                    return <Recipe key={idx} recipe={recipe}  recipes={recipes} setRecipes={setRecipes} />}
            
            }
 
                )}
        </div>
    )
}

export default RecipeList;
