import { useState } from 'react'
import { useEffect } from 'react'


function Searchbar({recipes, setRecipes}){

  const [inputText, setInputText] = useState('')

  function handleInput(e) {
    e.preventDefault()
    // console.log(e.target.value)
    setInputText(e.target.value)
  }
  
  //  function searchResult(e){
  //   e.preventDefault()
  //   recipes.filter(recipe => {
  //     if(inputText === "") {
  //       return recipe
  //     } else if(recipe.name.toLowerCase().includes(inputText.toLowerCase())){
  //       return post
  //     }
  //   }).map((recipe, index) => (
  //     <div className='filtered' key={index}>
  //         <h2>{recipe.name}</h2>
  //         <p>{recipe.description}</p>
  //         <ul>
  //               {recipe.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
  //           </ul>
  //     </div>
  //   )

  //   )   
  // }
// console.log(inputText)
  const filterSearch = () => {
    recipes.forEach((recipe) => {
      for(const ingredient of recipe.ingredients) {
        console.log(ingredient)
        if(!ingredient.includes(inputText) && inputText.length > 0){
          recipe.display = false
        } else {
          console.log(inputText)
            recipe.display = true 
            break;
        }
      } 
    }) 
      setRecipes([...recipes])
    

  }

  useEffect(() => {
      filterSearch()
  }, [inputText])


  
    return(
        <div>
           <form>
            <input value={inputText} type="search" className="todo-input" onChange={handleInput} placeholder="Search for an ingredient..."/>
        </form>
      
    </div>
  );
    
    
}

export default Searchbar;


{/* {setRecipes(recipes.filter(recipe => recipe.likes > 0).map(filteredRecipe => (
        <li>
          {filteredRecipe}
        </li>
      )))} */}
      // setRecipes(ingredients.filter((item) => item.includes(handleInput).map(filtered => {
      //   return(
      //     <li>
      //       {filtered}
      //     </li>
      // )}) 
        
      // ))


      // if(inputText > 0){
      //   setRecipes(recipes.filter((recipe)=> {
      //     console.log(recipe.name.match(inputText))
      //   })
      // )}


      // const filterSearch = () => {
      //   recipes.map((recipe) => {
      //     for(const ingredient in recipe.ingredients) {
      //       console.log(ingredient)
      //       if(!ingredient.includes(inputText) && inputText > 0){
      //           recipe.display = false
      //       } else {
      //           recipe.display = true 
      //           break;
      //       }
      //     }
      //   })
      // }


      // <button type="submit" className="todo-button" onClick={searchResult} >Add</button>
