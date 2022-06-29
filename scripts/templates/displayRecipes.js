function displayRecipes(recipe) {


const recipes = recipe.querySelectorAll('div[class = recipe_card]')
const nameFilter = recipe.querySelectorAll('div[nameFilter = active]')
const ingredientFilter = recipe.querySelectorAll('div[ingredientFilter = active]')
const applianceFilter = recipe.querySelectorAll('div[applianceFilter = active]')
const ustensilFitler =  recipe.querySelectorAll('div[ustensilFilter = active]')
    // check filtre actif 
    var nombreFiltreActif = 0
    if(nameFilter.length > 0) {
        nombreFiltreActif ++
    }
    if(ingredientFilter.length > 0) {
        nombreFiltreActif ++
    }
    if(applianceFilter.length > 0) {
        nombreFiltreActif ++
    }
    if(ustensilFitler.length > 0) {
        nombreFiltreActif ++
    }

   // //console.log(nombreFiltreActif);

    // // check filtre actif sur chaque recette
    for(let i = 0; i < recipes.length; i++) {
    
        var nombreFiltreActiveRecette = 0  
        ///// CAS MONOFILTRE
        // name filter
        if(recipes[i].getAttribute('nameFilter') ==='active') {
            ////console.log('NAME FILTER:',recipes[i]);
            recipes[i].style.display = 'block' 
            nombreFiltreActiveRecette ++      
        }
        else{
            recipes[i].style.display = 'none'
        }
    
        // ingredient filter    
        if(recipes[i].getAttribute('ingredientFilter') ==='active') {
        ////console.log('INGREDIENT FILTER',recipes[i]);
            recipes[i].style.display = 'block'
            nombreFiltreActiveRecette ++        
        }
        else{
            recipes[i].style.display = 'none'
        }
       
        // appliance filter
        if(recipes[i].getAttribute('applianceFilter') ==='active') {
        ////console.log('APPLIANCE FILTER',recipes[i]);
            recipes[i].style.display = 'block'
            nombreFiltreActiveRecette ++
            
        }
        else{
            recipes[i].style.display = 'none'
        } 

        // ustensil filter
        if(recipes[i].getAttribute('ustensilFilter') ==='active') {
        ////console.log('USTENSIL FILTER',recipes[i]);
            recipes[i].style.display = 'block'
            nombreFiltreActiveRecette ++
            
        }
        else{
            recipes[i].style.display = 'none'
        }
  


        ///// CAS MULTIFILTRE
        //compare filter active site and filter active recipe
        if(nombreFiltreActiveRecette) {
            ////console.log(nombreFiltreActif);
            if(nombreFiltreActiveRecette === nombreFiltreActif) {
               recipes[i].style.display = 'block'
            }
            else{
                recipes[i].style.display = 'none'
            }
            
        } 
    }
    
}

function displayAllRecipes(recipe) {
    console.log(recipe);
    const recipeList = recipe.querySelectorAll('div[class = recipe_card]')
    const nameFilter = recipe.querySelectorAll('div[nameFilter = active]')
    const ingredientFilter = recipe.querySelectorAll('div[ingredientFilter = active]')
    const applianceFilter = recipe.querySelectorAll('div[applianceFilter = active]')
    const ustensilFitler =  recipe.querySelectorAll('div[ustensilFilter = active]')

    // check filtre actif 
    var nombreFiltreActif = 0
    if(nameFilter.length > 0) {
        nombreFiltreActif ++
    }
    if(ingredientFilter.length > 0) {
        nombreFiltreActif ++
    }
    if(applianceFilter.length > 0) {
        nombreFiltreActif ++
    }
    if(ustensilFitler.length > 0) {
        nombreFiltreActif ++
    }

    for(let i = 0; i < recipeList.length; i++) {
        //check filters
        var nombreFiltreActiveRecette = 0  
        if(recipeList[i].getAttribute('nameFilter') ==='active') {

            nombreFiltreActiveRecette ++
           
        }
        if(recipeList[i].getAttribute('ingredientFilter') ==='active') {
       
            nombreFiltreActiveRecette ++
        }
        if(recipeList[i].getAttribute('applianceFilter') ==='active') {
          
            nombreFiltreActiveRecette ++
        }
        if(recipeList[i].getAttribute('ustensilFilter') ==='active') {
          
            nombreFiltreActiveRecette ++
        }

        if(nombreFiltreActiveRecette === nombreFiltreActif) {
            recipeList[i].style.display = 'block'
        }
        else{
          
            recipeList[i].style.display = 'none'
        }    
    }
}

//remove attribute when input cleared
function removeAttributeFromRecipe(recipe, attribute) {
    let recipes = recipe.querySelectorAll(`div[${attribute} = active]`)
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].getAttribute(`${attribute}`)) {
            recipes[i].removeAttribute(`${attribute}`)
        }else{

        }
    }
}






