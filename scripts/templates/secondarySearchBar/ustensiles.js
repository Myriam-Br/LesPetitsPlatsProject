class Ustensiles {
  constructor(recipes) {
    this.$wrapper = document.createElement('article');
    this.$wrapper.setAttribute('id', 'ustensiles_search_bar');
    this.$recipe = document.getElementById('recipe_wrapper');
    this._recipes = recipes;
    this.$tagContainer = document.getElementById('tags_container');
    this.$tagContainerUstensils = this.$tagContainer.querySelectorAll('li[class=ustensil_tag]');
  }

  handleUstensils(button, icone, list) {
    const input = this.$wrapper.querySelector('#input_ustensiles');
    input.addEventListener('keyup', (e) => {
      const elt = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (elt.length >= 3) {
        displayItemCategory(this.$recipe);
        displayListUstensil(elt);
        handleAttributeUstensilInput(this.$recipe, elt);
      } else {
        const attributeName = 'ustensilFilter';
        displayItemCategory(this.$recipe);
        displayListUstensilFull(this.$tagContainerUstensils);
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
        const attributeName = 'ustensilFilter';
        removeAttributeFromRecipe(this.$recipe, attributeName);
      }
      dropDownList(button, icone, list);
    });

    // HANDLE TAGS ON CLICK
    // create tag for each element selected from list
    const classTag = 'ustensil_tag';
    for (let i = 0; i < list.querySelectorAll('li').length; i++) {
      const tag = list.querySelectorAll('li')[i];
      tag.addEventListener('click', (e) => {
        createHTMLTag(this.$tagContainer, tag, classTag);
        handleAttributeUstensilTag(this.$recipe, tag, this.$tagContainer);
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
    const labelInputUstensiles = document.createElement('label');
    labelInputUstensiles.setAttribute('for', 'input_ustensiles');
    const inputUstensiles = document.createElement('input');
    inputUstensiles.setAttribute('id', 'input_ustensiles');
    inputUstensiles.setAttribute('placeholder', 'Rechercher un ustensile');
    inputUstensiles.setAttribute('value', 'Ustensiles');

    // button arrow
    const btnDropDown = document.createElement('button');
    btnDropDown.setAttribute('class', 'drop_down');
    btnDropDown.setAttribute('id', 'drop_down_ustensiles');
    const iconBtnDropDown = document.createElement('i');
    iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down');
    btnDropDown.appendChild(iconBtnDropDown);
    inputUstensiles.appendChild(btnDropDown);

    // ingredients list
    const ustensilesSection = document.createElement('ul');
    ustensilesSection.setAttribute('id', 'ustensiles_list');
    ustensilesSection.setAttribute('class', 'list');
    ustensilesSection.style.display = 'none';

    const ustensilsTab = [];
    for (let i = 0; i < this._recipes.length; i++) {
      // console.log(this._recipes[i].ingredients);
      const { ustensils } = this._recipes[i];
      for (let j = 0; j < ustensils.length; j++) {
        //  console.log(ustensils[j]);
        const ustensilToLowerCase = ustensils[j].toLowerCase();
        const ustensilSyntax = ustensilToLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        ustensilsTab.push(ustensilSyntax);
      }
    }

    that.$wrapper.appendChild(ustensilesSection);
    that.$wrapper.appendChild(labelInputUstensiles);
    that.$wrapper.appendChild(inputUstensiles);
    that.$wrapper.appendChild(btnDropDown);

    // retirer les doublons du tableau
    const uniqueUstensilTab = [...new Set(ustensilsTab)];
    uniqueUstensilTab.forEach((element) => {
      // console.log(element);
      const ustensiltItem = document.createElement('li');
      ustensiltItem.setAttribute('class', 'ustensils_from_list');
      ustensiltItem.setAttribute('name', element);
      const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1);
      ustensiltItem.innerHTML = elementSyntax;
      ustensilesSection.appendChild(ustensiltItem);
    });

    that.handleUstensils(btnDropDown, iconBtnDropDown, ustensilesSection);
    that.handleDropDown(btnDropDown, iconBtnDropDown, ustensilesSection);
    return that.$wrapper;
  }
}
