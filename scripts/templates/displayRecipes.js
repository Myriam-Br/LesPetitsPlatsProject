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


    //gestion display list item
}

//remove attribute when input cleared
function removeAttributeFromRecipe(recipe, attribute) {
    console.log(recipe);
    let recipes = recipe.querySelectorAll(`div[${attribute} = active]`)
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].getAttribute(`${attribute}`)) {
            recipes[i].removeAttribute(`${attribute}`)
        }else{

        }
    }
}


function handleItemList(input, list) {
    for(let i = 0; i < list.length; i++) { 
        const item = list[i].getAttribute('class')
        if(item.includes(input)) {
            list[i].style.display = 'block'
            //break
        } else{
            //list[i].style.display = 'none'
        }          
    }
}

function displayFullItemList(list) {
    for(let i = 0; i < list.length; i++) {
     list[i].style.display = 'block'
    }
}

function handleDisplayListItem(itemsFromRecipe, itemsFromList) {
    for(let i = 0; i < itemsFromRecipe.length; i++) {
        handleItemList(itemsFromRecipe[i].getAttribute('class'), itemsFromList.querySelectorAll('li') )
    }
}

//gestion affichage item
function demo(recipe) {
    console.log(recipe);
    const listIngredient = document.getElementById('ingredients_list').querySelectorAll('li')
    const list = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')
    let match = false
  //  let idMatch = j
    for(let i = 0; i < listIngredient.length; i++) {
        match = false
        for(let j = 0; j < list.length; j++) {
          

            if(list[j].getAttribute('class') === listIngredient[i].getAttribute('id')) {
                //listIngredient[j].style.display = 'block'
                match = true         
                //break
            }       
            else{
              // listIngredient[j].style.display='none'
               match = false
            }           
        }
        if(!match) {
            listIngredient[i].style.display = 'none'
        }
        else{
            listIngredient[i].style.display = 'block'
        }
        
    }
}

function setAttribute(recipes, tag) {
    tag = tag.getAttribute('id')
    for(let i = 0; i < recipes.querySelectorAll('ul[class=ingredient_recipe_list]').length; i++) {
        const ingredientTab = recipes.querySelectorAll('ul[class=ingredient_recipe_list]')[i].querySelectorAll('li')
        for(let j = 0; j < ingredientTab.length; j++) {
            const ingredient = ingredientTab[j]
            if(tag === ingredient.getAttribute('class')) {
                ingredient.setAttribute('selected', 'active')   
            }
        }
    }
    
 
}

function getAttribute(recipes, recipesList, tag, attribute, container) {
    tag = tag.getAttribute('id')
    console.log(container.querySelectorAll('p'));
    for(let i = 0; i < recipesList.length; i++) {
        var filterActif = 0
        const ingredientTab = recipesList[i].querySelector('.ingredient_recipe_list').querySelectorAll('li')
        for(let j = 0; j < ingredientTab.length; j++) {    
            if(ingredientTab[j].getAttribute('selected')) {
                filterActif++               
            }                
        }
      
        // check if recipe filter = recipe active page
        if(filterActif === container.querySelectorAll('p').length) {
            recipesList[i].setAttribute(attribute, 'active')
        }
        else{
           recipesList[i].removeAttribute(attribute)
        }

       
    }  

    test(recipes)
}

function test(recipes) {
    console.log(recipes);
}

