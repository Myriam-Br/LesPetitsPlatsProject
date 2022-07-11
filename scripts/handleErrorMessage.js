function displayMessageError(recipe) { 

    const allRecipes = recipe.querySelectorAll('div[class=recipe_card]')
    let noMatchRecipe = recipe.querySelectorAll('div[nameMatch=false]')
    let errorMessage = document.getElementById('error_message')

    if(noMatchRecipe.length === allRecipes.length) {
        errorMessage.innerHTML = ' Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.'
    }else{
        errorMessage.innerHTML = ''
    }
}