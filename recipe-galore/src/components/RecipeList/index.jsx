import Recipe from '../Recipes'
function RecipeList({recipes, setRecipes}) {

    return(
        <div className="recipe-list">
            {recipes.map((recipe, idx) => {
                if(recipe.display){
                    
                    return <Recipe key={idx} recipe={recipe}  recipes={recipes} setRecipes={setRecipes} />}
            
            }
 
                )}
        </div>
    )
}

export default RecipeList;
