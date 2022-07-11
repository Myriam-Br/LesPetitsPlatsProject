function errorMessage(recipe) { 

    let displayedRecipes = recipe.querySelectorAll("[style = 'display: none;']")
    const allRecipes = recipe.querySelectorAll('div[class=recipe_card]')

    if(displayedRecipes.length === allRecipes.length) {
        recipe.querySelector('.error_message').innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher "tarte aux pommes"  , "poisson ", etc'        
    }else{
        recipe.querySelector('.error_message').innerHTML = ''
        
    }

}