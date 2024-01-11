class Ingredients {
  constructor(recipes) {
    this.$wrapper = document.createElement('article');
    this.$wrapper.setAttribute('id', 'ingredients_search_bar');
    this.$recipe = document.getElementById('recipe_wrapper');
    this._recipes = recipes;
    this.$tagContainer = document.getElementById('tags_container');
    this.$tagContainerIngredients = this.$tagContainer.querySelectorAll('li[class=ingredient_tag]');
  }

  handleIngredient(button, icone, list) {
    // console.log(list.querySelectorAll('li'));
    const input = this.$wrapper.querySelector('#input_ingredients');
    input.addEventListener('keyup', (e) => {
      const elt = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (elt.length >= 3) {
        displayItemCategory(this.$recipe);
        displayListIngredient(elt);
        handleAttributeIngredientInput(this.$recipe, elt);
      } else {
        const attributeName = 'ingredientFilter';
        displayItemCategory(this.$recipe);
        displayListIngredientFull(this.$tagContainerIngredients);
        removeAttributeFromRecipe(this.$recipe, attributeName);
      }
    });

    input.addEventListener('click', (e) => {
      input.value = '';
      list.style.display = 'block';
      const elt = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (elt.length >= 3) {
        handleAttributeIngredientInput(this.$recipe, elt);
      } else {
        const attributeName = 'ingredientFilter';
        removeAttributeFromRecipe(this.$recipe, attributeName);
      }
      dropDownList(button, icone, list);
    });

    // HANDLE TAGS ON CLICK
    // create tag for each element selected from list
    const classTab = 'ingredient_tag';
    for (let i = 0; i < list.querySelectorAll('li').length; i++) {
      const tag = list.querySelectorAll('li')[i];
      tag.addEventListener('click', (e) => {
        createHTMLTag(this.$tagContainer, tag, classTab);
        handleAttributeIngredientTag(this.$recipe, tag, this.$tagContainer);
        handleAttributeRecipe(this.$recipe);
        displayRecipes(this.$recipe);
        displayItemCategory(this.$recipe);
      });
    }
  }

  handleDropDown(button, icone, list) {
    button.addEventListener('click', (e) => {
      dropDownList(button, icone, list);
    });
  }

  createSearchBar() {
    const that = this;

    // CREATE INGREDIENTS SEARCH BAR DOM
    // input
    const labelInputIngredients = document.createElement('label');
    labelInputIngredients.setAttribute('for', 'input_ingredients');

    const inputIngredients = document.createElement('input');
    inputIngredients.setAttribute('id', 'input_ingredients');
    inputIngredients.setAttribute('placeholder', 'Rechercher un ingrédient');
    inputIngredients.setAttribute('value', 'Ingrédients');

    // button arrow
    const btnDropDown = document.createElement('button');
    btnDropDown.setAttribute('class', 'drop_down');
    btnDropDown.setAttribute('id', 'drop_down_ingredients');
    const iconBtnDropDown = document.createElement('i');
    iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down');
    btnDropDown.appendChild(iconBtnDropDown);
    inputIngredients.appendChild(btnDropDown)
    // ingredients list
    const ingredientsSection = document.createElement('ul');
    ingredientsSection.setAttribute('id', 'ingredients_list');
    ingredientsSection.setAttribute('class', 'list');
    ingredientsSection.style.display = 'none';
    inputIngredients.appendChild(ingredientsSection)
    const ingredientsTab = [];

    for (let i = 0; i < this._recipes.length; i++) {
      // console.log(this._recipes[i].ingredients);
      const { ingredients } = this._recipes[i];
      for (let j = 0; j < ingredients.length; j++) {
        // console.log(ingredients[j]);
        const ingredientsList = ingredients[j];
        // console.log(ingredients[j]);

        for (let k = 0; k < ingredientsList.length; k++) {
          const ingredientToLowerCase = ingredientsList[k].ingredient.toLowerCase();
          const ingredientSyntax = ingredientToLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          ingredientsTab.push(ingredientSyntax);
        }
      }
    }

    that.$wrapper.appendChild(ingredientsSection);
    that.$wrapper.appendChild(labelInputIngredients);
    that.$wrapper.appendChild(inputIngredients);
    that.$wrapper.appendChild(btnDropDown);

    // retirer les doublons du tableau
    const uniqueIngredientTab = [...new Set(ingredientsTab)];
    // console.log(uniqueIngredientTab);
    uniqueIngredientTab.forEach((element) => {
      const ingredientItem = document.createElement('li');
      const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1);
      ingredientItem.setAttribute('name', element);
      // console.log(element);
      ingredientItem.setAttribute('class', 'ingredient_from_list');
      ingredientItem.innerHTML = elementSyntax;
      ingredientsSection.appendChild(ingredientItem);
    });

    that.handleIngredient(btnDropDown, iconBtnDropDown, ingredientsSection);
    that.handleDropDown(btnDropDown, iconBtnDropDown, ingredientsSection);

    return that.$wrapper;
  }
}
