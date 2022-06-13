class Ustensiles{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ustensiles_search_bar') 
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
    }

    handleUstensils() {
        const input = this.$wrapper.querySelector('#input_ustensiles')
        
       // console.log(input);      
        input.addEventListener('keyup', e => {
            const recipes = this.$recipe.querySelectorAll('div[class = recipe_card]')
            const elt = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
           // console.log(recipes);
            if(elt.length >= 3) {
                //console.log(elt); 
                for(let i = 0; i < recipes.length; i++) {
                   // console.log(recipes[i]. querySelector('.ustensil_list'));
                    const ustensilList = recipes[i].querySelector('.ustensil_list').querySelectorAll('li')
                    for(let j = 0; j < ustensilList.length; j++){
                        console.log(ustensilList[j].innerHTML.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                        const ustensilItem = ustensilList[j].innerHTML.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        if(ustensilItem.includes(elt)){
                            console.log(recipes[i]);
                            recipes[i].setAttribute('ustensilFilter', 'active')
                            break
                        }else{
                            recipes[i].removeAttribute('ustensilFilter')
                        }
                    }
                }
                  
            }
        })
    }

    dropDownSection() {
       // console.log(this.$wrapper.querySelector('#drop_down_ustensiles'));
        const el = this.$wrapper.querySelector('#drop_down_ustensiles')
        const section = this.$wrapper.querySelector('#ustensiles_list')
        const icone = this.$wrapper.querySelector('i')
        //console.log(this.$wrapper.querySelector('i'));
        el.addEventListener('click', () => {
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
        

        that.dropDownSection()

        //retirer les doublons du tableau
        let uniqueUstensilTab = [...new Set(ustensilsTab)]
        //console.log(uniqueIngredientTab);
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
        return that.$wrapper
    }

}