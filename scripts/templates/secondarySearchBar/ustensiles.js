class Ustensiles{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ustensiles_search_bar') 
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
    }

    handleUstensils() {
        const input = this.$wrapper.querySelector('#input_ustensiles')      
        input.addEventListener('keyup', e => {
            const recipes = this.$recipe.querySelectorAll('div[class = recipe_card')
            const elt = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")  
            if(elt.length >= 3) {
                for(let i = 0; i < recipes.length; i++) {
                    const ustensilList = recipes[i].querySelector('.ustensil_list').querySelectorAll('li')
                    console.log(ustensilList);
                   for(let j = 0; j < ustensilList.length; j++) {
                    let ustensil = ustensilList[j].getAttribute('class')
                        if(ustensil.includes(elt)) {
                            recipes[i].setAttribute('ustensilFilter', 'active')
                            break
                        }
                        else{
                            recipes[i].removeAttribute('ustensilFilter')
                        }
                   }
                }              
            }
            else{
                const attributeName = 'ustensilFilter'
                removeAttributeFromRecipe(this.$recipe, attributeName) 
            }
        })
    }

    createSearchBar (){
        const that = this

        // CREATE INGREDIENTS SEARCH BAR DOM

        // input
        const labelInputUstensiles = document.createElement('label')
        labelInputUstensiles.setAttribute('for', 'input_ustensiles')
        const inputUstensiles = document.createElement('input')
        inputUstensiles.setAttribute('id', 'input_ustensiles')
        inputUstensiles.setAttribute('placeholder', 'Rechercher un ustensile')
        inputUstensiles.setAttribute('value', 'Ustensiles')

        //button arrow 
        const btnDropDown = document.createElement('button')
        btnDropDown.setAttribute('class', 'drop_down')
        btnDropDown.setAttribute('id', 'drop_down_ustensiles')
        const iconBtnDropDown = document.createElement('i')
        iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down')
        btnDropDown.appendChild(iconBtnDropDown)
        inputUstensiles.appendChild(btnDropDown)

        // ingredients list
        const ustensilesSection = document.createElement('ul')
        ustensilesSection.setAttribute('id', 'ustensiles_list')
        ustensilesSection.setAttribute('class', 'list')
        ustensilesSection.style.display = "none"

        const ustensilsTab = []
        for(let i = 0; i < this._recipes.length; i++) {
            // console.log(this._recipes[i].ingredients);
            let ustensils = this._recipes[i].ustensils      
            for(let j = 0; j < ustensils.length; j ++ ) {
              //  console.log(ustensils[j]);
                let ustensilToLowerCase = ustensils[j].toLowerCase()
                let ustensilSyntax = ustensilToLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                ustensilsTab.push(ustensilSyntax)
            }
            
        }

        that.$wrapper.appendChild(ustensilesSection)
        that.$wrapper.appendChild(labelInputUstensiles)
        that.$wrapper.appendChild(inputUstensiles)
        that.$wrapper.appendChild(btnDropDown)

        //retirer les doublons du tableau
        let uniqueUstensilTab = [...new Set(ustensilsTab)]
        uniqueUstensilTab.forEach(element => {
            //console.log(element);
            const ustensiltItem = document.createElement('li')   
            ustensiltItem.setAttribute('class', element)
            ustensiltItem.setAttribute('id', element)        
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1)
            ustensiltItem.innerHTML= elementSyntax  
            ustensilesSection.appendChild(ustensiltItem) 
           // that.handleIngredients(element)   
                
        });

        that.handleUstensils()
        dropDownList(btnDropDown, iconBtnDropDown,ustensilesSection)
        return that.$wrapper
    }

}