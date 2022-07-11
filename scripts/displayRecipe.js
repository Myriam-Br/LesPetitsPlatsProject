function displayRecipe(recipes) {
  let numberActifFilter = 0;
  if (recipes.querySelectorAll('div[nameFilter=active').length > 0) {
    numberActifFilter++;
  }
  if (recipes.querySelectorAll('div[ingredientFilter=active').length > 0) {
    numberActifFilter++;
  }
  if (recipes.querySelectorAll('div[ustensilFilter=active').length > 0) {
    numberActifFilter++;
  }
  if (recipes.querySelectorAll('div[applianceFilter=active').length > 0) {
    numberActifFilter++;
  }

  recipes = recipes.querySelectorAll('div[class=recipe_card]');
  recipes.forEach((recipe) => {
    let numberActifFilterInRecipe = 0;
    // get recipes filtered by name
    if (recipe.getAttribute('nameFilter') === 'active') {
      numberActifFilterInRecipe++;
    }
    if (recipe.getAttribute('ingredientFilter') === 'active') {
      numberActifFilterInRecipe++;
    }
    if (recipe.getAttribute('ustensilFilter') === 'active') {
      numberActifFilterInRecipe++;
    }
    if (recipe.getAttribute('applianceFilter') === 'active') {
      numberActifFilterInRecipe++;
    }


    // handle display recipe (block/none)
    if (numberActifFilterInRecipe === numberActifFilter) {
      recipe.style.display = 'block';
      recipe.setAttribute('match', 'true');
    } else {
      recipe.style.display = 'none';
      recipe.removeAttribute('match');
    }
  });
  



  //CLEARED INPUT
  if(document.querySelectorAll('div[nameMatch=false]').length === recipes.length) {
    recipes.forEach(recipe => {
      recipe.removeAttribute('match');
      recipe.style.display = 'none'
    })
  }

  

}

function displayItemsCategory(recipes) {

  const inputIngredient = document.getElementById('input_ingredients');
  const inputUstensil = document.getElementById('input_ustensiles');
  const inputAppliance = document.getElementById('input_appareils');
  // remplir tableau elements actifs
  const ingredientTab = [];
  const ustensilTab = [];
  const applianceTab = [];

 
  recipes.querySelectorAll('div[match=true]').forEach((recipe) => {
    // INGREDIENTS TAB
    recipe.querySelectorAll('li[class=ingredient]').forEach((ingredient) => {
      ingredientTab.push(ingredient.getAttribute('name'));
    });

    // USTENSIL TAB
    recipe.querySelectorAll('li[class=ustensil]').forEach((ustensil) => {
      ustensilTab.push(ustensil.getAttribute('name'));
    });

    // APPLIANCE TAB

    applianceTab.push(recipe.querySelector('h4[class=appliance]').getAttribute('name'));
  });

  const ingredientList = document.getElementById('ingredient_list').querySelectorAll('li');
  const ingredientListTab = [];

  if(inputIngredient.value.length >=3) {
    ingredientList.forEach((ingredient) => {
      if(ingredient.getAttribute('name').includes(inputIngredient.value)) {
        ingredientListTab.push(ingredient);
        ingredient.style.display = 'block';
      }else{
        ingredient.style.display = 'none';
      }
   
    });
    console.log('INPUT',ingredientListTab);
    return ingredientListTab
    
  }
  else{
    ingredientList.forEach((ingredient) => {
      ingredientListTab.push(ingredient);
      ingredient.style.display = 'none';
    });

  }
  // INGREDIENTS
  // remplir le tableau et display none element list
  
  // remplir tableau résultat
  const results = [];
  console.log(ingredientListTab);
  ingredientTab.forEach((ingredient) => {
    const result = ingredientListTab.filter((ingredientList) => ingredientList.getAttribute('name') === ingredient);
    results.push(result[0]);
  });



  // USTENSIL
  // remplir le tableau et display none element list
  const ustensilList = document.getElementById('ustensil_list').querySelectorAll('li');
  const ustensilListTab = [];
  ustensilList.forEach((ustensil) => {
    ustensilListTab.push(ustensil);
    ustensil.style.display = 'none';
  });

  // remplir tableau résultat
  ustensilTab.forEach((ustensil) => {
    const result = ustensilListTab.filter((ustensilList) => ustensilList.getAttribute('name') === ustensil);
    results.push(result[0]);
  });

  // USTENSIL
  // remplir le tableau et display none element list
  const applianceList = document.getElementById('appliance_list').querySelectorAll('li');
  const applianceListTab = [];
  applianceList.forEach((appliance) => {
    applianceListTab.push(appliance);
    appliance.style.display = 'none';
  });

  // remplir tableau résultat
  applianceTab.forEach((appliance) => {
    const result = applianceListTab.filter((applianceList) => applianceList.getAttribute('name') === appliance);
    results.push(result[0]);
  });

  const ingredientTagContainer = document.getElementById('tags_container').querySelectorAll('li[class=ingredient_tag]');
  const ustensilTagContainer = document.getElementById('tags_container').querySelectorAll('li[class=ustensil_tag]');
  const applianceTagContainer = document.getElementById('tags_container').querySelectorAll('li[class=appliance_tag]');
 
  // RECUPERER TOUS LES RESULTATS ET LES AFFICHER
  results.forEach((element) => {
    element.style.display = 'block';

    // check ingredient tag active
    ingredientTagContainer.forEach((tag) => {
      if (tag.getAttribute('name') === element.getAttribute('name')) {
        element.style.display = 'none';
      }
    });

    // check ustensil tag active
    ustensilTagContainer.forEach((tag) => {
      if (tag.getAttribute('name') === element.getAttribute('name')) {
        element.style.display = 'none';
      }
    });

    // check appliance tag active
    applianceTagContainer.forEach((tag) => {
      if (tag.getAttribute('name') === element.getAttribute('name')) {
        element.style.display = 'none';
      }
    });
  });
}

function displayItemSelection(recipes) {
  const numberTotal = document.querySelector('#tags_container').querySelectorAll('li').length;
  const numberIngredientTag = document.querySelector('#tags_container').querySelectorAll('li[class=ingredient_tag]').length;
  const numberUstensilTag = document.querySelector('#tags_container').querySelectorAll('li[class=ustensil_tag]').length;
  const numberApplianceTag = document.querySelector('#tags_container').querySelectorAll('li[class=appliance_tag]').length;

  

  recipes.querySelectorAll('div[class=recipe_card]').forEach((recipe) => {
    const recipeIngredients = recipe.querySelectorAll('li[class=ingredient]');
    const recipeUstensils = recipe.querySelectorAll('li[class=ustensil]');
    const recipeAppliance = recipe.querySelector('h4[class=appliance]');
    // console.log(recipeAppliance);

    let numberIngredients = 0;
    let numberUstensils = 0;
    let numberAppliance = 0;
    let numberActiveTotal = 0;

    recipeIngredients.forEach((ingredient) => {
      if (ingredient.getAttribute('ingredient') === 'selected') {
        numberIngredients++;
        numberActiveTotal++;
      }
    });

    recipeUstensils.forEach((ustensil) => {
      if (ustensil.getAttribute('ustensil') === 'selected') {
        numberUstensils++;
        numberActiveTotal++;
      }
    });

    if (recipeAppliance.getAttribute('appliance') === 'selected') {
      numberAppliance++;
      numberActiveTotal++;
    }


    // verifier ici les inputs

    if (numberIngredients === numberIngredientTag && numberActiveTotal === numberTotal &&  numberTotal !== 0 ) {
      recipe.setAttribute('ingredientFilter', 'active');
    } else {
      recipe.removeAttribute('ingredientFilter');
    }
    if (numberUstensils === numberUstensilTag && numberActiveTotal === numberTotal && numberTotal !== 0) {
      recipe.setAttribute('ustensilFilter', 'active');
    } else {
      recipe.removeAttribute('ustensilFilter');
    }
    if (numberAppliance === numberApplianceTag && numberActiveTotal === numberTotal && numberTotal !== 0) {
      recipe.setAttribute('applianceFilter', 'active');
    } else {
      recipe.removeAttribute('applianceFilter');
    }
  });
}
