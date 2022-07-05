class Ustensiles{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ustensiles_search_bar') 
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes = recipes   
    }


    handleDropDown(button, icone, list, input) {
        button.addEventListener('click', e => {
            dropDownList(button, icone, list)
        })

        input.addEventListener('click', e =>{
            dropDownList(button, icone, list)
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


        const ustensilSection = document.createElement('ul')
        ustensilSection.setAttribute('id', 'ustensil_list')
        ustensilSection.style.display='none'

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
        //retirer les doublons du tableau
        let uniqueUstensilTab = [...new Set(ustensilsTab)]
        uniqueUstensilTab.forEach(element => {
            //console.log(element);
            const ustensiltItem = document.createElement('li')   
            ustensiltItem.setAttribute('class', 'ustensils_from_list')
            ustensiltItem.setAttribute('name', element)        
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1)
            ustensiltItem.innerHTML= elementSyntax  
            ustensilSection.appendChild(ustensiltItem) 
            
        });

        that.$wrapper.appendChild(ustensilSection)
        that.$wrapper.appendChild(labelInputUstensiles)
        that.$wrapper.appendChild(inputUstensiles)
        that.$wrapper.appendChild(btnDropDown)
        that.$wrapper.appendChild(ustensilSection)


        //functions
        that.handleDropDown(btnDropDown, iconBtnDropDown, ustensilSection, inputUstensiles)
        return that.$wrapper
    }

}