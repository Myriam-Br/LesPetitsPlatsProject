class Appareils {
  constructor(recipes) {
    this.$wrapper = document.createElement('article');
    this.$wrapper.setAttribute('id', 'appareils_search_bar');
    this.$recipe = document.getElementById('recipe_wrapper');
    this._recipes = recipes;
    this.$tagContainer = document.getElementById('tags_container');
    this.$tagContainerAppareils = this.$tagContainer.querySelectorAll('li[class=appliance_tag]');
  }

<<<<<<< HEAD
    
    dropDownSection() {
       // console.log(this.$wrapper.querySelector('#drop_down_appareils'));
        const el = this.$wrapper.querySelector('#drop_down_appareils')
        //const section = this.$wrapper.querySelector('#appareils_list')
       // console.log(this.$wrapper.querySelector('i'));
        const icone = this.$wrapper.querySelector('i')
        el.addEventListener('click', () => {
            /*
            console.log(section.style);      
            console.log(section.getAttribute('opened'));
            if(section.getAttribute('opened')){
                section.style.display='none'
                section.removeAttribute('opened')      
                icone.removeAttribute('fa fa-chevron-up')
                icone.setAttribute('class','fa fa-chevron-down')    
            } else {
                section.style.display='block'
                section.setAttribute('opened', 'true')
                icone.removeAttribute('fa fa-chevron-down')
                icone.setAttribute('class','fa fa-chevron-up')
            }     */
        })
    }
=======
  handleAppareil(button, icone, list) {
    const input = this.$wrapper.querySelector('#input_appareils');
    input.addEventListener('keyup', (e) => {
      const elt = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (elt.length >= 3) {
        displayItemCategory(this.$recipe);
        displayListIngredient(elt);
        handleAttributeApplianceInput(this.$recipe, elt);
      } else {
        const attributeName = 'applianceFilter';
        displayItemCategory(this.$recipe);
        displayListIngredientFull(this.$tagContainerAppareils);
        removeAttributeFromRecipe(this.$recipe, attributeName);
      }
    });
>>>>>>> algorithm/for

    input.addEventListener('click', (e) => {
      input.value = '';
      list.style.display = 'block';
      const elt = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (elt.length >= 3) {
        handleAttributeIngredientInput(this.$recipe, elt);
      } else {
        const attributeName = 'applianceFilter';
        removeAttributeFromRecipe(this.$recipe, attributeName);
      }
      dropDownList(button, icone, list);
    });

    // HANDLE TAGS ON CLICK
    // create tag for each element selected from list
    const classTab = 'appliance_tag';
    for (let i = 0; i < list.querySelectorAll('li').length; i++) {
      const tag = list.querySelectorAll('li')[i];
      tag.addEventListener('click', (e) => {
        createHTMLTag(this.$tagContainer, tag, classTab);
        handleAttributeAppareilTag(this.$recipe, tag, this.$tagContainer);
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

<<<<<<< HEAD
        that.$wrapper.appendChild(labelInputAppareils)
        that.$wrapper.appendChild(inputAppareils)
        that.$wrapper.appendChild(btnDropDown)
=======
    // CREATE INGREDIENTS SEARCH BAR DOM

    // input
    const labelInputAppareils = document.createElement('label');
    labelInputAppareils.setAttribute('for', 'input_appareils');
    const inputAppareils = document.createElement('input');
    inputAppareils.setAttribute('id', 'input_appareils');
    inputAppareils.setAttribute('placeholder', 'Rechercher un appareil');
    inputAppareils.setAttribute('value', 'Appareils');
>>>>>>> algorithm/for

    // button arrow
    const btnDropDown = document.createElement('button');
    btnDropDown.setAttribute('class', 'drop_down');
    btnDropDown.setAttribute('id', 'drop_down_appareils');
    const iconBtnDropDown = document.createElement('i');
    iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down');
    btnDropDown.appendChild(iconBtnDropDown);

<<<<<<< HEAD
        return that.$wrapper
=======
    // ingredients list
    const appareilsSection = document.createElement('ul');
    appareilsSection.setAttribute('id', 'appareils_list');
    appareilsSection.setAttribute('class', 'list');
    appareilsSection.style.display = 'none';

    const appareilTab = [];
    for (let i = 0; i < this._recipes.length; i++) {
      // console.log(this._recipes[i].ingredients);
      const appliances = this._recipes[i].appliance;
      //  console.log(appliances);
      const appareilToLowerCase = appliances.toLowerCase();
      const appareilSyntax = appareilToLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      appareilTab.push(appareilSyntax);
>>>>>>> algorithm/for
    }

    that.$wrapper.appendChild(appareilsSection);
    that.$wrapper.appendChild(labelInputAppareils);
    that.$wrapper.appendChild(inputAppareils);
    that.$wrapper.appendChild(btnDropDown);

    const uniqueAppareilsTab = [...new Set(appareilTab)];
    // console.log(uniqueIngredientTab);
    uniqueAppareilsTab.forEach((element) => {
      // console.log(element);
      const appareilItem = document.createElement('li');
      appareilItem.setAttribute('class', 'appareils_from_list');
      appareilItem.setAttribute('name', element);
      const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1);
      appareilItem.innerHTML = elementSyntax;
      appareilsSection.appendChild(appareilItem);
      // that.handleIngredients(element)
    });

    that.handleAppareil(btnDropDown, iconBtnDropDown, appareilsSection);
    that.handleDropDown(btnDropDown, iconBtnDropDown, appareilsSection);
    return that.$wrapper;
  }
}
