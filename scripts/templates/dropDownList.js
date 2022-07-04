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
            displayItemCategory(recipes)
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
            displayItemCategory(recipes)
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

function displayListUstensil(input) {
    const ustensilList = document.getElementById('ustensiles_list').querySelectorAll('li')
    for(let i = 0; i < ustensilList.length; i++) {
        let ustensil = ustensilList[i].getAttribute('name')
        if(ustensil.includes(input)) {
            ustensilList[i].style.display = 'block'
        }
        else{
            ustensilList[i].style.display = 'none'
        }
    }
}

function displayListUstensilFull(container){
    const ustensilList = document.getElementById('ustensiles_list').querySelectorAll('li')
    if(container.querySelectorAll('li').length > 0) {
        for(let i = 0; i < container.querySelectorAll('li').length; i++) {
            let ustensil = container.querySelectorAll('li')[i].getAttribute('name')
            for(let j = 0; j < ustensilList.length; j++) {
                if(ustensil === ustensilList[j].getAttribute('name')) {
                    ustensilList[j].style.display = 'none'
                }
                else{
                    ustensilList[j].style.display = 'block'
                }
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
            displayItemCategory(recipes)   
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
        const recipeName =  recipe.querySelector('.name_recipe').innerHTML

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
        for(let j = 0; j < ustensilList.length; j++) {  
            let ustensil = ustensilList[j]
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


//PUT ALL THE CATEGORIES HERE SO IT'S EASIER TO MANAGE
function displayItemCategory(recipes) { 
    const ingredientTab = []
    const ustensilTab = []
    const appareilTab = []
    for(let i = 0; i < recipes.querySelectorAll('div[class=recipe_card]').length; i++) {     
        //get visible recipes
        if(recipes.querySelectorAll('div[class=recipe_card]')[i].style.display === 'block') {   
            let recipe = recipes.querySelectorAll('div[class=recipe_card]')[i]
            let ingredientList = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')
            let ustensilList = recipe.querySelector('.ustensil_recipe_list').querySelectorAll('li')
            let appareil = recipe.querySelector('.appliance')
            for(let j = 0; j < ingredientList.length; j++) {
                ingredientTab.push(ingredientList[j].getAttribute('name'))
            }
            for(let j = 0; j < ustensilList.length; j++) {
                ustensilTab.push(ustensilList[j].getAttribute('name'))
            }
            
            appareilTab.push(appareil.getAttribute('name'))
  
        }      
    } 

    //supprimer doublons
    let ingredientListUnique = [... new Set(ingredientTab)]
    let ustensilListUnique = [... new Set(ustensilTab)]
    let appareilListUnique = [... new Set(appareilTab)]


    //gérer creation tag
    //INGREDIENTS
    const containerIngredient = document.getElementById('ingredients_added')
    let listIngredients = document.getElementById('ingredients_list')
    listIngredients.innerHTML = ' '
    for(let i = 0; i < ingredientListUnique.length; i++) {
        let createIngredient = document.createElement('li')
        createIngredient.setAttribute('name', ingredientListUnique[i])
        createIngredient.setAttribute('class', 'ingredient_from_list')
        createIngredient.innerHTML = ingredientListUnique[i].charAt(0).toUpperCase() + ingredientListUnique[i].slice(1)
        createIngredient.addEventListener('click', e => {     
            createHTMLTag(containerIngredient, createIngredient)   
            handleAttributeIngredientTag(recipes, createIngredient, containerIngredient)   
            handleAttributeRecipe(recipes)  
            displayRecipes(recipes)  
            displayItemCategory(recipes)                         
        }) 
      
        listIngredients.appendChild(createIngredient)   
    }
    //chercher list tag actif et si new tag contain dans list tag actif (ne rien faire si oui)
    for(let i = 0; i < document.querySelectorAll('li[ingredient=selected]').length; i++) {
        for(let j = 0; j < listIngredients.querySelectorAll('li').length; j++) {
            if(listIngredients.querySelectorAll('li')[j].getAttribute('name') === document.querySelectorAll('li[ingredient=selected]')[i].getAttribute('name')) {
                listIngredients.querySelectorAll('li')[j].style.display = 'none'
            }
            else{
            }
        }     
    }   

    //USTENSILS
    const containerUstensil = document.getElementById('ustensils_added')
    let listUstensil = document.getElementById('ustensiles_list')
    listUstensil.innerHTML = ' '
    for(let i = 0; i < ustensilListUnique.length; i++) {
        let createUstensil = document.createElement('li')
        createUstensil.setAttribute('name', ustensilListUnique[i])
        createUstensil.setAttribute('class', 'ustensils_from_list')
        createUstensil.innerHTML = ustensilListUnique[i].charAt(0).toUpperCase() + ustensilListUnique[i].slice(1)
        createUstensil.addEventListener('click', e => {     
            createHTMLTag(containerUstensil, createUstensil)   
            handleAttributeIngredientTag(recipes, createUstensil, containerUstensil)   
            handleAttributeRecipe(recipes)  
            displayRecipes(recipes)  
           displayItemCategory(recipes)                         
        }) 
      
        listUstensil.appendChild(createUstensil)   
    }
    //chercher list tag actif et si new tag contain dans list tag actif (ne rien faire si oui)
    for(let i = 0; i < document.querySelectorAll('li[ustensil=selected]').length; i++) {
        for(let j = 0; j < listUstensil.querySelectorAll('li').length; j++) {
            if(listUstensil.querySelectorAll('li')[j].getAttribute('name') === document.querySelectorAll('li[ustensil=selected]')[i].getAttribute('name')) {
                listUstensil.querySelectorAll('li')[j].style.display = 'none'
            }
            else{
            }
        }     
    }
  
    //APPAREILS
    const containerAppareil = document.getElementById('appareils_added')
    let listAppareil = document.getElementById('appareils_list')
    listAppareil.innerHTML = ' '
 
    for(let i = 0; i < appareilListUnique.length; i++) {
        let createAppareil = document.createElement('li')
        createAppareil.setAttribute('name', appareilListUnique[i])
        createAppareil.setAttribute('class', 'appareils_from_list')
        createAppareil.innerHTML = appareilListUnique[i].charAt(0).toUpperCase() + appareilListUnique[i].slice(1)
        createAppareil.addEventListener('click', e => {     
            createHTMLTag(containerAppareil, createAppareil)   
            handleAttributeIngredientTag(recipes, createAppareil, containerAppareil)   
            handleAttributeRecipe(recipes)  
            displayRecipes(recipes)  
            displayItemCategory(recipes)                         
        }) 
      
        listAppareil.appendChild(createAppareil)   
    }
    //chercher list tag actif et si new tag contain dans list tag actif (ne rien faire si oui)
    for(let i = 0; i < document.querySelectorAll('li[appareil=selected]').length; i++) {
        for(let j = 0; j < listAppareil.querySelectorAll('li').length; j++) {
            if(listAppareil.querySelectorAll('li')[j].getAttribute('name') === document.querySelectorAll('li[appareil=selected]')[i].getAttribute('name')) {
                listAppareil.querySelectorAll('li')[j].style.display = 'none'
            }
            else{
            }
        }     
    }      
}



