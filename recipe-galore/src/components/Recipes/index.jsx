function Recipe({recipe , recipes, setRecipes}) {

    function handleLikeButton(e) {
        e.preventDefault();
        setRecipes(recipes.map((item) => {
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

    function likedRecipes(e){
        e.preventDefault();
        const filteredRecipes = []
        setRecipes(recipes.filter((item) => {
            if(item.likes > 0){
                return {
                    ...item,
                    

                }

            }
        }))
    }
    return(

        <div className="recipes">
            <h2>{recipe.name}</h2>
            <h3>{recipe.description}</h3>
            <ul className="ingredients">
                {recipe.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
            </ul>
            <button onClick={handleLikeButton}>Like</button>
            <p>Likes:{recipe.likes}</p>
        </div>
        
    )
}

export default Recipe;
