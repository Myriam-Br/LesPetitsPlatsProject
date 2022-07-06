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
    ingredientList.querySelectorAll('li').forEach(tag => {
        let classTag = 'ingredient_tag'
        tag.addEventListener('click', e => {
            //CREATE TAG 
            createTagHTML(tag, container, recipes, classTag) 
            handleAttributeItems(recipes, container)      
            displayItemSelection(recipes)
            displayRecipe(recipes)  
            displayItemsCategory(recipes) 
        })
    })


    // USTENSIL ATTRIBUTE TAG
    let ustensilList = document.getElementById('ustensil_list')
    //let containerTagUstensil = container.querySelector('#ustensils_added')
    ustensilList.querySelectorAll('li').forEach(tag => {
        let classTag = 'ustensil_tag'
        tag.addEventListener('click', e => {
            //CREATE TAG 
            createTagHTML(tag, container, recipes, classTag)
            handleAttributeItems(recipes, container) 
            displayItemSelection(recipes)
            displayRecipe(recipes) 
            displayItemsCategory(recipes)
    })

    })


    //APPLIANCE ATTRIBUTE TAG
    let applianceList = document.getElementById('appliance_list')
    //let containerTagAppliance =  container.querySelector('#appareils_added')
    applianceList.querySelectorAll('li').forEach(tag => {
        let classTag = 'appliance_tag'
        tag.addEventListener('click', e => {
            //CREATE TAG 
            createTagHTML(tag, container, recipes, classTag)
            handleAttributeItems(recipes, container)
            displayItemSelection(recipes)
            displayRecipe(recipes) 
            displayItemsCategory(recipes)
        })
    })

}


function createTagHTML(tag, container,recipes, classTag) {
    //CREATE TAG 
    let createTag = document.createElement('li')
    createTag.setAttribute('name', tag.getAttribute('name'))
    createTag.setAttribute('class', classTag)
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
     
    })    
}


function handleAttributeItems(recipes, container) {

    let containerTab = container.querySelectorAll('li')
    let tagsArray = []
    containerTab.forEach(tag => {
        tagsArray.push(tag)
    })


    //get all ingredients tags 
    let ingredientTags = tagsArray.filter(item =>{
        return item.getAttribute('class') ==='ingredient_tag'
    })
    //console.log('ingredientTags',ingredientTags);

    //get all ustensils tags 
    let ustensilTags = tagsArray.filter(item =>{
        return item.getAttribute('class') ==='ustensil_tag'
    })
   // console.log('ustensilTags',ustensilTags);

    //get all appliances tags 
    let applianceTags = tagsArray.filter(item =>{
        return item.getAttribute('class') === 'appliance_tag'
    })
   console.log('applianceTags',applianceTags);


    //SET ATTRIBUTES
    //ingredients
    let ingredientsList = recipes.querySelectorAll('li[class=ingredient]')
    ingredientsList.forEach(ingredient => {
        ingredientTags.forEach(ingredientTag => {
            if(ingredient.getAttribute('name') === ingredientTag.getAttribute('name')) {
               // console.log(ingredient);
                ingredient.setAttribute('ingredient', 'selected')

                //REMOVE ATTRIBUTE AND DELETE TAG
                ingredientTag.querySelector('button').addEventListener('click', e => {
                    ingredient.removeAttribute('ingredient')
                    ingredientTag.remove()
                    displayItemSelection(recipes)
                    displayRecipe(recipes) 
                    displayItemsCategory(recipes)
                })
            }

        })
    })

    //ustensils
    let ustensilList = recipes.querySelectorAll('li[class=ustensil]')
    ustensilList.forEach(ustensil => {
        ustensilTags.forEach(ustensilTag => {
            if(ustensil.getAttribute('name') === ustensilTag.getAttribute('name')) {
               ustensil.setAttribute('ustensil', 'selected')

               //REMOVE ATTRIBUTE AND DELETE TAG
               ustensilTag.querySelector('button').addEventListener('click', e => {
                    ustensil.removeAttribute('ustensil')
                    ustensilTag.remove()
                    displayItemSelection(recipes)
                    displayRecipe(recipes) 
                    displayItemsCategory(recipes)
                })
            }

        })
    })

    //appliances
    let applianceList = recipes.querySelectorAll('h4[class=appliance]')
    applianceList.forEach(appliance => {
        applianceTags.forEach(applianceTag => {
            if(appliance.getAttribute('name') === applianceTag.getAttribute('name')) {
                appliance.setAttribute('appliance', 'selected')

                //REMOVE ATTRIBUTE AND DELETE TAG
                applianceTag.querySelector('button').addEventListener('click', e => {
                appliance.removeAttribute('appliance')
                applianceTag.remove()
                    displayItemSelection(recipes)
                    displayRecipe(recipes) 
                    displayItemsCategory(recipes)
                })
            }

        })
    })


}



