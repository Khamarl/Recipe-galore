import { useState } from 'react'
import './App.css'
import {RecipeList, Searchbar} from './components'

//store array of recipes.
const storedRecipes = [
  {name: 'Banana bread',
   description: 'A moist cake made from bananas' ,
   ingredients: ['Bananas', 'eggs', 'flour', 'vanilla'] ,
   likes: 0,
   display: true
  },

  { name: 'Pineapple upside down cake',
   description: 'exotic cake with caramelised pineapples',
   ingredients: ['pineapples', 'syrup', 'eggs',],
   likes: 0,
   display: true
  },

  { name: 'Victoria sponge',
   description: 'light and fluffy, fit for a queen',
   ingredients: ['jam', 'cream', 'flour', 'eggs'],
   likes: 0,
   display: true
  },

  { name: 'Rocky road',
   description: 'mash up of marshmallows and biscuits',
   ingredients: ['marshmallows', 'chocolate', 'biscuits'],
   likes: 0,
   display: true
  },

  { name: 'Apple crumble',
   description: 'crumbly goodness with apples and sugar',
   ingredients: ['apples', 'sugar', 'flour', 'butter'],
   likes: 0,
   display: true
  }

]
function App() {
  //use state hook and pass it value of stored recipes 
  const [recipes, setRecipes] = useState(storedRecipes)

  return (
    <div className="App">
        <header>Choose a Recipe</header>
        <div className='recipe-list'>
          <Searchbar recipes={recipes} setRecipes={setRecipes} />
          {/* <button><Filtered recipes={recipes} setRecipes={setRecipes}/>Filter Liked</button> */}
          <RecipeList recipes={recipes} setRecipes={setRecipes} />
        </div>
    </div>
  )
}

export default App
