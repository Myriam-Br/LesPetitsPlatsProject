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
            handleAttributeRecipe(recipes, container) 
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



//FUNCTION SET/REMOVE ATTRIBUTE RECIPE -> check all filters than setAttribute or remove
function handleAttributeRecipe(recipes, container) {
    var numberOfFilters = container.querySelectorAll('li').length
    //check number of filters per recipe in ingredient list
    for (let i = 0; i < recipes.querySelectorAll('div[class=recipe_card]').length; i++) {
        const recipe = recipes.querySelectorAll('div[class=recipe_card]')[i]
        const ingredientList = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')
        var numberFilterRecipe = 0 

        for(let j = 0; j < ingredientList.length; j++) {  
            let ingredient = ingredientList[j]
            if(ingredient.getAttribute('ingredient')==='selected') {
                numberFilterRecipe++   
            }      
        }

        //if filters active in recipe = filter active -> set attribute
        if(numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ingredientFilter','active')     
        }else{
            recipe.removeAttribute('ingredientFilter')
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
            handleAttributeRecipeU(recipes, container) 
            displayRecipes(recipes)   
        })
    }  
}

// FUNCTION HANDLE ATTRIBUTE INPUT
function handleAttributeUstensilInput(recipes, input) {
    recipes = recipes.querySelectorAll('div[class=recipe_card]')
    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]
        const ustensilsList = recipe.querySelector('.ustensil_list').querySelectorAll('li')      
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



//FUNCTION SET/REMOVE ATTRIBUTE RECIPE -> check all filters than setAttribute or remove
function handleAttributeRecipeU(recipes, container) {
    var numberOfFilters = container.querySelectorAll('li').length
    //check number of filters per recipe in ingredient list
    for (let i = 0; i < recipes.querySelectorAll('div[class=recipe_card]').length; i++) {
        const recipe = recipes.querySelectorAll('div[class=recipe_card]')[i]
        const ustensilList = recipe.querySelector('.ustensil_list').querySelectorAll('li')
        var numberFilterRecipe = 0 

        for(let j = 0; j < ustensilList.length; j++) {  
            let ustensil = ustensilList[j]
            if(ustensil.getAttribute('ustensil')==='selected') {
                numberFilterRecipe++   
            }      
        }

        //if filters active in recipe = filter active -> set attribute
        if(numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ustensilFilter','active')     
        }else{
            recipe.removeAttribute('ustensilFilter')
        }

    }
}







