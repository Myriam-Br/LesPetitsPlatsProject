function displayRecipe(recipes) {
    
    var numberActifFilter = 0
    if(recipes.querySelectorAll('div[nameFilter=active').length > 0) {
        numberActifFilter++
    }
    if(recipes.querySelectorAll('div[ingredientFilter=active').length > 0) {
        numberActifFilter++
    }
    if(recipes.querySelectorAll('div[ustensilFilter=active').length > 0) {
        numberActifFilter++
    }
    if(recipes.querySelectorAll('div[applianceFilter=active').length > 0) {
        numberActifFilter++
    }

  
    recipes = recipes.querySelectorAll('div[class=recipe_card]')
    recipes.forEach(recipe => {
        var numberActifFilterInRecipe = 0
        //get recipes filtered by name
        if(recipe.getAttribute('nameFilter')==='active') {
           numberActifFilterInRecipe ++
        }
        if(recipe.getAttribute('ingredientFilter')==='active') {
           numberActifFilterInRecipe ++
        }
        if(recipe.getAttribute('ustensilFilter')==='active') {
           numberActifFilterInRecipe ++
        }
        if(recipe.getAttribute('applianceFilter')==='active') {
           numberActifFilterInRecipe ++
        }

        // handle display recipe (block/none)
        if(numberActifFilterInRecipe ===  numberActifFilter) {
           // console.log(recipe);
            recipe.style.display = 'block'
            recipe.setAttribute('match', 'true')
        }
        else{
            recipe.style.display = 'none'
            recipe.removeAttribute('match')
        }

    });
}


function displayItemsCategory(recipes) {
 
    //remplir tableau elements actifs
    let ingredientTab = []
    let ustensilTab = []
    let applianceTab = []

    const inputIngredient = document.getElementById('input_ingredients')
    const inputUstensil =  document.getElementById('input_ustensiles')
    const inputAppliance =  document.getElementById('input_appareils')
    recipes.querySelectorAll('div[match=true]').forEach(recipe => {
        //INGREDIENTS TAB
        recipe.querySelectorAll('li[class=ingredient]').forEach(ingredient => {  
            ingredientTab.push(ingredient.getAttribute('name'))    
        })
       

        //USTENSIL TAB
        
        recipe.querySelectorAll('li[class=ustensil]').forEach(ustensil => {
            ustensilTab.push(ustensil.getAttribute('name'))
        })

        //APPLIANCE TAB
       
        applianceTab.push(recipe.querySelector('h4[class=appliance]').getAttribute('name'))
    })

    //INGREDIENTS
    //remplir le tableau et display none element list 
    let ingredientList = document.getElementById('ingredient_list').querySelectorAll('li')
    let ingredientListTab = []
    ingredientList.forEach(ingredient => {
        ingredientListTab.push(ingredient)
        ingredient.style.display = 'none'
    })

    //remplir tableau résultat
    let results = []
    ingredientTab.forEach(ingredient => {
        let result = ingredientListTab.filter(ingredientList => {
            return ingredientList.getAttribute('name') === ingredient
        })
       results.push(result[0])   
    })

    //USTENSIL
    //remplir le tableau et display none element list 
    let ustensilList = document.getElementById('ustensil_list').querySelectorAll('li')
    let ustensilListTab = []
    ustensilList.forEach(ustensil => {
        ustensilListTab.push(ustensil)
        ustensil.style.display = 'none'
    })

    //remplir tableau résultat
    ustensilTab.forEach(ustensil => {
    let result = ustensilListTab.filter(ustensilList => {
        return ustensilList.getAttribute('name') === ustensil
    })
    results.push(result[0])   
    })


     //USTENSIL
    //remplir le tableau et display none element list 
    let applianceList = document.getElementById('appliance_list').querySelectorAll('li')
    let applianceListTab = []
    applianceList.forEach(appliance => {
        applianceListTab.push(appliance)
        appliance.style.display = 'none'
    })

    //remplir tableau résultat
    applianceTab.forEach(appliance => {
    let result = applianceListTab.filter(applianceList => {
        return applianceList.getAttribute('name') === appliance
    })
    results.push(result[0])   
    })


    let ingredientTagContainer = document.getElementById('tags_container').querySelectorAll('li[class=ingredient_tag]')
    let ustensilTagContainer = document.getElementById('tags_container').querySelectorAll('li[class=ustensil_tag]')
    let applianceTagContainer = document.getElementById('tags_container').querySelectorAll('li[class=appliance_tag]')
    //RECUPERER TOUS LES RESULTATS ET LES AFFICHER
    results.forEach(element => {
        element.style.display='block'

        //check ingredient tag active
        ingredientTagContainer.forEach(tag => {
            if(tag.getAttribute('name') === element.getAttribute('name')) {
                element.style.display='none'
            }
        })

        //check ustensil tag active
        ustensilTagContainer.forEach(tag => {
        if(tag.getAttribute('name') === element.getAttribute('name')) {
            element.style.display='none'
        }
        })

        //check appliance tag active
        applianceTagContainer.forEach(tag => {
            if(tag.getAttribute('name') === element.getAttribute('name')) {
                element.style.display='none'
            }
        })
    })

}

function displayItemSelection(recipes) {

    var numberTotal = document.querySelector('#tags_container').querySelectorAll('li').length
    var numberIngredientTag = document.querySelector('#tags_container').querySelectorAll('li[class=ingredient_tag]').length 
    var numberUstensilTag = document.querySelector('#tags_container').querySelectorAll('li[class=ustensil_tag]').length 
    var numberApplianceTag = document.querySelector('#tags_container').querySelectorAll('li[class=appliance_tag]').length 
    
    recipes.querySelectorAll('div[class=recipe_card]').forEach(recipe => {

        let recipeIngredients = recipe.querySelectorAll('li[class=ingredient]')
        let recipeUstensils = recipe.querySelectorAll('li[class=ustensil]')
        let recipeAppliance = recipe.querySelector('h4[class=appliance]')
       // console.log(recipeAppliance);

        var numberIngredients = 0
        var numberUstensils = 0
        var numberAppliance = 0
        var numberActiveTotal = 0
        
        recipeIngredients.forEach(ingredient => {
            if(ingredient.getAttribute('ingredient') === 'selected') {
                numberIngredients ++
                numberActiveTotal ++

            }
        })

        recipeUstensils.forEach(ustensil => {
            if(ustensil.getAttribute('ustensil') === 'selected') {
                numberUstensils ++
                numberActiveTotal ++
            }
        })


   
        if(recipeAppliance.getAttribute('appliance') === 'selected') {
            numberAppliance ++
            numberActiveTotal ++
        }


        if(numberIngredients === numberIngredientTag && numberActiveTotal === numberTotal) {
            recipe.setAttribute('ingredientFilter', 'active')
        }else{
            recipe.removeAttribute('ingredientFilter')
        }
        if(numberUstensils === numberUstensilTag && numberActiveTotal === numberTotal) {
            recipe.setAttribute('ustensilFilter', 'active')
        }else{
            recipe.removeAttribute('ustensilFilter')
        }
        if(numberAppliance === numberApplianceTag && numberActiveTotal === numberTotal) {
            recipe.setAttribute('applianceFilter', 'active')
        }else{
            recipe.removeAttribute('applianceFilter')
        }

       

    })


   
}

