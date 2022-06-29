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

//FUNCTION SET/REMOVE ATTRIBUTE INGREDIENT TAG
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
            console.log(ingredientsSelectedTab);
            for(let k = 0; k < ingredientsSelectedTab.length; k++) {
                let ingredient = ingredientsSelectedTab[k]
                if(getTag.getAttribute('name') === ingredient.getAttribute('name')) {
                    ingredient.removeAttribute('ingredient')
                }      
            }
        })
    }      
}

// FUNCTION HANDLE ATTRIBUTE INGREDIENT INPUT
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

//FUNCTION SET/REMOVE ATTRIBUTE RECIPE
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

        if(numberFilterRecipe === numberOfFilters) {
            recipe.setAttribute('ingredientFilter','active')     
        }else{
            recipe.removeAttribute('ingredientFilter')
        }
    }
}











