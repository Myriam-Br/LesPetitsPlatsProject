// FUNCTION HANDLE DROP DOWN LIST
function dropDownList(button, icone, list) {
    if(list) {
        if(button.getAttribute('open')) {
            button.removeAttribute('open')
            icone.removeAttribute('class')
            icone.setAttribute('class', 'fa fa-chevron-down' )
            list.style.display = 'none'
        }
        else{
            button.setAttribute('open', 'true')
            icone.removeAttribute('class')
            icone.setAttribute('class', 'fa fa-chevron-up' )
            list.style.display = 'block'
           
        }   
    } 
}


// FUNCTION HANDLE ATTRIBUTE INPUT
function handleAttributeNameInput(recipes, input) {
    recipes = recipes.querySelectorAll('div[class=recipe_card]')
    
    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]
        let recipeName = recipes[i].querySelector('.name_recipe').getAttribute('name')
        if(recipeName.includes(input)) {
            recipe.setAttribute('nameFilter', 'active')   
        }
        else{
            recipe.removeAttribute('nameFilter')
        }
    }
}


// FUNCTION CREATE/DELTE TAG DIPLAY BLOCK/NONE INGREDIENT LIST
function createHTMLTag(container, tag) {
    //create tag 
    let createTagHtml = document.createElement('li')
    createTagHtml.setAttribute('name', tag.getAttribute('name'))
    createTagHtml.setAttribute('class', 'tag')
    createTagHtml.innerHTML = tag.getAttribute('name')
    //create button tag
    let createTagButton = document.createElement('button')
    createTagButton.setAttribute('class', 'tag_button')
    createTagButton.setAttribute('name', 'close_tag' + ' ' +tag.getAttribute('name'))
    createTagButton.innerHTML = 'x' 
    createTagHtml.appendChild(createTagButton)
    container.appendChild(createTagHtml) 

    //check if tag already exist          
    for(let i = 0; i < container.querySelectorAll('li').length; i++) {
        if(container.querySelectorAll('li')[i].getAttribute('name') === createTagHtml.getAttribute('name')) {   
            tag.style.display = 'none'     
            break
        }
    } 
    createTagButton.addEventListener('click', e => {
        tag.style.display = 'block'
        createTagHtml.remove()
    })

}

////////////////////////INGREDIENTS///////////////////////////////
//FUNCTION SET/REMOVE ATTRIBUTE TAG
function handleAttributeIngredientTag(recipes, tag, container) {
    const ingredientsTab = recipes.querySelectorAll('li[class=ingredient]')
    for(let i = 0; i < ingredientsTab.length; i++) {
        let ingredient = ingredientsTab[i]    
        if(tag.getAttribute('name') === ingredient.getAttribute('name')) {
            ingredient.setAttribute('ingredient','selected')        
        }  
    }
   
    const ingredientsSelectedTab = recipes.querySelectorAll('li[ingredient=selected]')
    for(let j = 0; j < container.querySelectorAll('li').length; j++) {
        let getTag = container.querySelectorAll('li')[j]
        let btn_close_tag = getTag.querySelector('button')
          
        btn_close_tag.addEventListener('click', e => {
            for(let k = 0; k < ingredientsSelectedTab.length; k++) {
                let ingredient = ingredientsSelectedTab[k]
                if(getTag.getAttribute('name') === ingredient.getAttribute('name')) {
                    ingredient.removeAttribute('ingredient')
                }      
            }
            handleAttributeRecipe(recipes) 
            displayRecipes(recipes) 
        })
    }  
}

// FUNCTION HANDLE ATTRIBUTE INPUT
function handleAttributeIngredientInput(recipes, input) {  

    recipes = recipes.querySelectorAll('div[class=recipe_card]')  
     
    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]
        const ingredientList = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')      
        for(let j = 0; j < ingredientList.length; j++) {
            let ingredient = ingredientList[j].getAttribute('name')    
            if(ingredient.includes(input)) {
                recipe.setAttribute('ingredientFilter', 'active')        
                break
            }
            else{
                recipe.removeAttribute('ingredientFilter')
            }
        }    
    }   

}

function displayIngredients(recipes) { 
    const ingredientTab = []
    for(let i = 0; i < recipes.querySelectorAll('div[class=recipe_card]').length; i++) {     
        //get visible recipes
        if(recipes.querySelectorAll('div[class=recipe_card]')[i].style.display === 'block') {   
            let recipe = recipes.querySelectorAll('div[class=recipe_card]')[i]
            let ingredientList = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')
            for(let j = 0; j < ingredientList.length; j++) {
                ingredientTab.push(ingredientList[j].getAttribute('name'))
            }
        }      
    } 
    //supprimer doublons
    let ingredientListUnique = [... new Set(ingredientTab)]
    let list = document.getElementById('ingredients_list')
    list.innerHTML = ' '
    for(let k = 0; k < ingredientListUnique.length; k++) {
        console.log(ingredientListUnique[k]);
        let createIngredient = document.createElement('li')
        createIngredient.setAttribute('name', ingredientListUnique[k])
        createIngredient.setAttribute('class', 'ingredient_from_list')
        createIngredient.innerHTML = ingredientListUnique[k]
        list.appendChild(createIngredient)
    }
}

function displayListIngredient(input) {
    const ingredientList = document.getElementById('ingredients_list').querySelectorAll('li')
    for(let i = 0; i < ingredientList.length; i++) {
        let ingredient = ingredientList[i].getAttribute('name')
        if(ingredient.includes(input)) {
            ingredientList[i].style.display = 'block'
        }
        else{
            ingredientList[i].style.display = 'none'
        }
    }
}

function displayListIngredientFull(container){
    const ingredientList = document.getElementById('ingredients_list').querySelectorAll('li')
    if(container.querySelectorAll('li').length > 0) {
        for(let i = 0; i < container.querySelectorAll('li').length; i++) {
            let ingredient = container.querySelectorAll('li')[i].getAttribute('name')
            for(let j = 0; j < ingredientList.length; j++) {
                if(ingredient === ingredientList[j].getAttribute('name')) {
                    ingredientList[j].style.display = 'none'
                }
                else{
                    ingredientList[j].style.display = 'block'
                }
            }
        }
    }
   
}

////////////////////////USTENSILS///////////////////////////////
//FUNCTION SET/REMOVE ATTRIBUTE TAG
function handleAttributeUstensilTag(recipes, tag, container) {
    const ustensileTab = recipes.querySelectorAll('li[class=ustensil]')
    for(let i = 0; i < ustensileTab.length; i++) {
        let ustensil = ustensileTab[i]    
        if(tag.getAttribute('name') === ustensil.getAttribute('name')) {
            ustensil.setAttribute('ustensil','selected')        
        }  
    }

    const ustensilSelectedTab = recipes.querySelectorAll('li[ustensil=selected]')
    for(let j = 0; j < container.querySelectorAll('li').length; j++) {
        let getTag = container.querySelectorAll('li')[j]
        let btn_close_tag = getTag.querySelector('button')
          
        btn_close_tag.addEventListener('click', e => {
            for(let k = 0; k < ustensilSelectedTab.length; k++) {
                let ustensil = ustensilSelectedTab[k]
                if(getTag.getAttribute('name') === ustensil.getAttribute('name')) {
                    ustensil.removeAttribute('ustensil')
                }      
            }
            handleAttributeRecipe(recipes) 
            displayRecipes(recipes)   
        })
    }  
}
// FUNCTION HANDLE ATTRIBUTE INPUT
function handleAttributeUstensilInput(recipes, input) {
    recipes = recipes.querySelectorAll('div[class=recipe_card]')
    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]
        const ustensilsList = recipe.querySelector('.ustensil_recipe_list').querySelectorAll('li')      
        for(let j = 0; j < ustensilsList.length; j++) {
            let ustensil = ustensilsList[j].getAttribute('name')    
            if(ustensil.includes(input)) {
                recipe.setAttribute('ustensilFilter', 'active')
                break
            }
            else{
                recipe.removeAttribute('ustensilFilter')
            }
        }    
    }
}



////////////////////////APPAREILS///////////////////////////////
//FUNCTION SET/REMOVE ATTRIBUTE TAG
function handleAttributeAppareilTag(recipes, tag, container) {
    const applianceList = recipes.querySelectorAll('h4[class=appliance]')
    for(let i = 0; i < applianceList.length; i++) {
        let appliance = applianceList[i]    
        if(tag.getAttribute('name') === appliance.getAttribute('name')) {
            appliance.setAttribute('appliance','selected')    
            //console.log(appliance);    
        }  
    }

    const applianceSelectedTab = recipes.querySelectorAll('h4[appliance=selected]')
    for(let j = 0; j < container.querySelectorAll('li').length; j++) {
        let getTag = container.querySelectorAll('li')[j]
        let btn_close_tag = getTag.querySelector('button')
          
        btn_close_tag.addEventListener('click', e => {
            for(let k = 0; k < applianceSelectedTab.length; k++) {
                let appliance = applianceSelectedTab[k]
                if(getTag.getAttribute('name') === appliance.getAttribute('name')) {
                    appliance.removeAttribute('appliance')
                }      
            }
            handleAttributeRecipe(recipes) 
            displayRecipes(recipes)   
        })
    }
}
// FUNCTION HANDLE ATTRIBUTE INPUT
function handleAttributeApplianceInput(recipes, input) {
    recipes = recipes.querySelectorAll('div[class=recipe_card]')
    
    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]
        let appliance = recipe.querySelector('h4[class=appliance]').getAttribute('name') 
        console.log(appliance);
        console.log(input);
        if(appliance.includes(input)) {
            recipe.setAttribute('applianceFilter', 'active')   
        }
        else{
            recipe.removeAttribute('applianceFilter')
        }
    }
}



//FUNCTION SET/REMOVE ATTRIBUTE RECIPE -> check all filters than setAttribute or remove
function handleAttributeRecipe(recipes) {

   // var numberOfNameFilters = document.querySelectorAll('div[nameFilter=active]').length

    var numberOfIngredientFilters = document.getElementById('ingredients_added').querySelectorAll('li').length
    var numberOfUstensilsFilters = document.getElementById('ustensils_added').querySelectorAll('li').length
    var numberOfAppliancesFilters = document.getElementById('appareils_added').querySelectorAll('li').length
    var numberOfFilters = numberOfIngredientFilters + numberOfUstensilsFilters + numberOfAppliancesFilters
  

    //check number of filters per recipe in ingredient list
    for (let i = 0; i < recipes.querySelectorAll('div[class=recipe_card]').length; i++) {
        const recipe = recipes.querySelectorAll('div[class=recipe_card]')[i]
        const ingredientList = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')
        const ustensilList = recipe.querySelector('.ustensil_recipe_list').querySelectorAll('li')
        const appliance = recipe.querySelector('.appliance')
       

        var numberActiveIngredient = 0
        var numberActiveUstensils = 0
        var numberActiveAppliance = 0
      
        //verifier si numbre filtre actif d'une catégorie = numbre filtre de la catégorie dans le site -> +1 count
        // INGREDIENT
        for(let j = 0; j < ingredientList.length; j++) {  
            let ingredient = ingredientList[j]
            if(ingredient.getAttribute('ingredient')==='selected') {
                numberActiveIngredient++   
            }      
        }
    
        // USTENSILS
        for(let k = 0; k < ustensilList.length; k++) {  
            let ustensil = ustensilList[k]
            if(ustensil.getAttribute('ustensil')==='selected') {
                numberActiveUstensils++   
            }      
        }

        // APPAREIL
        if(appliance.getAttribute('appliance')==='selected') {
            numberActiveAppliance++   
        }      
 

        var numberFilterRecipe = numberActiveIngredient + numberActiveUstensils + numberActiveAppliance

        //if filters active category in recipe = filter active category && total filters recipe === total filters active -> set attribute to recipe
        if(numberActiveIngredient === numberOfIngredientFilters && numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ingredientFilter','active')     
        }
        else{
            recipe.removeAttribute('ingredientFilter')
        }
                        

        if(numberActiveUstensils === numberOfUstensilsFilters && numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ustensilFilter','active')     
        }
        else{
            recipe.removeAttribute('ustensilFilter')
        }

        if(numberActiveAppliance === numberOfAppliancesFilters && numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('applianceFilter','active')     
        }
        else{
            recipe.removeAttribute('applianceFilter')
        }
 
    }

    let activeRecipe = document.querySelectorAll('div[nameFilter=active]')
    if(activeRecipe.length > 0) {
        //check number of filters per recipe in ingredient list
    for (let i = 0; i < activeRecipe.length; i++) {
        const recipe = activeRecipe[i]
        const ingredientList = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')
        const ustensilList = recipe.querySelector('.ustensil_recipe_list').querySelectorAll('li')
        const appliance = recipe.querySelector('.appliance')
       

        var numberActiveIngredient = 0
        var numberActiveUstensils = 0
        var numberActiveAppliance = 0
      
        //verifier si numbre filtre actif d'une catégorie = numbre filtre de la catégorie dans le site -> +1 count
        // INGREDIENT
        for(let j = 0; j < ingredientList.length; j++) {  
            let ingredient = ingredientList[j]
            if(ingredient.getAttribute('ingredient')==='selected') {
                numberActiveIngredient++   
            }      
        }
    
        // USTENSILS
        for(let k = 0; k < ustensilList.length; k++) {  
            let ustensil = ustensilList[k]
            if(ustensil.getAttribute('ustensil')==='selected') {
                numberActiveUstensils++   
            }      
        }

        // APPAREIL
        if(appliance.getAttribute('appliance')==='selected') {
            numberActiveAppliance++   
        }      
 

        var numberFilterRecipe = numberActiveIngredient + numberActiveUstensils + numberActiveAppliance

       

        //if filters active category in recipe = filter active category && total filters recipe === total filters active -> set attribute to recipe
        if(numberActiveIngredient === numberOfIngredientFilters && numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ingredientFilter','active')   
        }
        else{
            recipe.removeAttribute('ingredientFilter')
        }
                        

        if(numberActiveUstensils === numberOfUstensilsFilters && numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ustensilFilter','active')     
        }
        else{
            recipe.removeAttribute('ustensilFilter')
        }

        if(numberActiveAppliance === numberOfAppliancesFilters && numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('applianceFilter','active')     
        }
        else{
            recipe.removeAttribute('applianceFilter')
        }

 
    }
    }
    
}






