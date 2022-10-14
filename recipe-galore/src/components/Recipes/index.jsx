function Recipe({recipe , recipes, setRecipes}) {

    function handleLikeButton(e) {
        e.preventDefault();
        // uses set recipes to get the recipe of question and map through recipes to see if setrecipes is same as recipe
        setRecipes(recipes.map((item) => {
            //if item and recipe and the same, the likes for that recipe increases by 1 
            if(item === recipe) {
                return {
                    ...item, 
                    likes: recipe.likes + 1 
                }
            }
            return item;
        }))
    }
    // console.log(recipe.ingredients)

    // function likedRecipes(e){
    //     e.preventDefault();
    //     const filteredRecipes = []
    //     setRecipes(recipes.filter((item) => {
    //         if(item.likes > 0){
    //             return {
    //                 ...item,
                    

    //             }

    //         }
    //     }))
    // }
    return(
        // use jsx to display each recipe on page
        <div className="recipes">
            <h2>{recipe.name}</h2>
            <h3>{recipe.description}</h3>
            <ul className="ingredients">
                {/* mapping through the ingredients array, giving them an index and displaying them on a page as a list */}
                {recipe.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
            </ul>
            <button onClick={handleLikeButton}>Like</button>
            <p>Likes:{recipe.likes}</p>
        </div>
        
    )
}

export default Recipe;
