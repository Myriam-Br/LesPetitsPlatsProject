function setAttributeRecipeInput(recipes, input) {   
    //recipes = recipes.querySelectorAll('h2[class=name_recipe]')
    //console.log('setAttribute', recipes);
   
   // INPUT TO TARGET
   const inputMain = document.getElementById('input_main_search_bar')
   const inputIngredient = document.getElementById('input_ingredients')
   const inputUstensil = document.getElementById('input_ustensiles')
   const inputAppliance = document.getElementById('input_appareils')
 
    // HANDLE NAME ATTRIBUTE FILTER
    if(input === inputMain) {
        // set attribute to recipe if match input value
        const recipesList = recipes.querySelectorAll('div[class=recipe_card]')
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        recipesList.forEach(recipe => { 
            let recipeName = recipe.querySelector('.name_recipe').getAttribute('name')      
            if(recipeName.includes(input)) {
                recipe.setAttribute('nameFilter', 'active')
            }          
        });
    }


    // HANDLE INGREDIENT ATTRIBUTE FILTER
    if(input === inputIngredient) {
        // set attribute to recipe if match input value
        const recipesList = recipes.querySelectorAll('div[class=recipe_card]')
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        recipesList.forEach(recipe => { 
            let recipeIngredients = recipe.querySelector('.ingredient_recipe_list').querySelectorAll('li')   
            recipeIngredients.forEach(ingredient => {
                ingredient = ingredient.getAttribute('name')
                if(ingredient.includes(input)) {
                    recipe.setAttribute('ingredientFilter', 'active')
                }
            })
        });
    }

    // HANDLE USTENSILS ATTRIBUTE FILTER
    if(input === inputUstensil) {
        // set attribute to recipe if match input value
        const recipesList = recipes.querySelectorAll('div[class=recipe_card]')
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        recipesList.forEach(recipe => { 
            let recipeUstensils = recipe.querySelector('.ustensil_recipe_list').querySelectorAll('li')   
            recipeUstensils.forEach(ustensil => {
                ustensil = ustensil.getAttribute('name')
                if(ustensil.includes(input)) {
                recipe.setAttribute('ustensilFilter', 'active')
                }
            })
        });
    }

    // HANDLE APPAREIL ATTRIBUTE FILTER
    if(input === inputAppliance) {
        // set attribute to recipe if match input value
        const recipesList = recipes.querySelectorAll('div[class=recipe_card]')
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        recipesList.forEach(recipe => { 
            let recipeAppareil = recipe.querySelector('.appliance').getAttribute('name')
            if(recipeAppareil.includes(input)) {
                recipe.setAttribute('applianceFilter', 'active')
            }       
        });
    }
  

   
}

function removeAttributeRecipeInput(recipes, input) {
  
    // INPUT TO TARGET
    const inputMain = document.getElementById('input_main_search_bar')
    const inputIngredient = document.getElementById('input_ingredients')
    const inputUstensil = document.getElementById('input_ustensiles')
    const inputAppliance = document.getElementById('input_appareils')

    if(input === inputMain) {
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        // remove attribute to recipe
        const recipesList = recipes.querySelectorAll('div[nameFilter=active]')
        recipesList.forEach(recipe => {
            recipe.removeAttribute('nameFilter')
        });
    }

    if(input === inputIngredient) {
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        // remove attribute to recipe
        const recipesList = recipes.querySelectorAll('div[ingredientFilter=active]')
        recipesList.forEach(recipe => {
            recipe.removeAttribute('ingredientFilter')
        });
    }

    if(input === inputUstensil) {
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        // remove attribute to recipe
        const recipesList = recipes.querySelectorAll('div[ustensilFilter=active]')
        recipesList.forEach(recipe => {
            recipe.removeAttribute('ustensilFilter')
        });
    }
    if(input === inputAppliance) {
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        // remove attribute to recipe
        const recipesList = recipes.querySelectorAll('div[applianceFilter=active]')
        recipesList.forEach(recipe => {
            recipe.removeAttribute('applianceFilter')
        });
    }
}


function handleTag(recipes, container) {

    // INGREDIENT ATTRIBUTE TAG
    let ingredientList = document.getElementById('ingredient_list')
    let containerTagIngredients = container.querySelector('#ingredients_added')
    ingredientList.querySelectorAll('li').forEach(tag => {
        tag.addEventListener('click', e => {
            //CREATE TAG 
            createTagHTML(tag, containerTagIngredients, recipes)
            displayItemSelection(recipes)   
        })
    })


    // USTENSIL ATTRIBUTE TAG
    let ustensilList = document.getElementById('ustensil_list')
    let containerTagUstensil = container.querySelector('#ustensils_added')
    ustensilList.querySelectorAll('li').forEach(tag => {
        tag.addEventListener('click', e => {
            //CREATE TAG 
            createTagHTML(tag, containerTagUstensil, recipes)
            displayItemSelection(recipes)  
    })

    })


    //APPLIANCE ATTRIBUTE TAG
    let applianceList = document.getElementById('appliance_list')
    let containerTagAppliance =  container.querySelector('#appareils_added')
    applianceList.querySelectorAll('li').forEach(tag => {
        tag.addEventListener('click', e => {
            //CREATE TAG 
            createTagHTML(tag, containerTagAppliance, recipes)
            displayItemSelection(recipes)  
        })
    })

}


function createTagHTML(tag, container,recipes) {
    //CREATE TAG 
    let createTag = document.createElement('li')
    createTag.setAttribute('name', tag.getAttribute('name'))
    createTag.setAttribute('class', 'appliance_tag')
    createTag.innerHTML = tag.innerHTML

    let createButtonDeleteTag = document.createElement('button')
    createButtonDeleteTag.setAttribute('name', 'close_'+ tag.getAttribute('name'))
    createButtonDeleteTag.setAttribute('class', 'close_button_tag')
    createButtonDeleteTag.innerHTML= 'x'

    tag.style.display = 'none'

    createTag.appendChild(createButtonDeleteTag)
    container.appendChild(createTag)


    // SUPPRIMER TAG
    createButtonDeleteTag.addEventListener('click', e => {          
        tag.style.display = 'block'
        createTag.remove()
        displayItemSelection(recipes)
    })

    //HANDLE ATTRIBUTE INGREDIENT TAG
    let ingredientInRecipe = recipes.querySelectorAll('li[class=ingredient]')
    ingredientInRecipe.forEach(ingredient => {
        //set attribute
        if(ingredient.getAttribute('name') === tag.getAttribute('name') ) {
            ingredient.setAttribute('ingredient', 'selected')
        }

        //remove attribute
        createButtonDeleteTag.addEventListener('click', e => {
            ingredient.removeAttribute('ingredient')
        })
    })



    
    //HANDLE ATTRIBUTE USTENSIL TAG
    let ustensilInRecipe = recipes.querySelectorAll('li[class=ustensil]')
    ustensilInRecipe.forEach(ustensil => {
        //set attribute
        if(ustensil.getAttribute('name') === tag.getAttribute('name') ) {
        ustensil.setAttribute('ustensil', 'selected')
        }

        //remove attribute
        createButtonDeleteTag.addEventListener('click', e => {
        ustensil.removeAttribute('ustensil')
        })
    })

    //HANDLE ATTRIBUTE USTENSIL TAG
    let applianceInRecipe = recipes.querySelectorAll('li[class=appliance]')
    applianceInRecipe.forEach(appliance => {
        //set attribute
        if(appliance.getAttribute('name') === tag.getAttribute('name') ) {
            appliance.setAttribute('appliance', 'selected')
        }

        //remove attribute
        createButtonDeleteTag.addEventListener('click', e => {
            appliance.removeAttribute('appliance')

        })
    })
}





