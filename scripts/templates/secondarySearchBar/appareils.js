class Appareils{
    constructor(recipes){    
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'appareils_search_bar')      
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
    }

    handleAppareil() {
      
        const input = this.$wrapper.querySelector('#input_appareils')
        //console.log('LISTE RECETTE',this.$recipe);
        //console.log(this.$recipe.querySelectorAll('.recipe_card'));
        //console.log(document.querySelectorAll('.recipe_card'));
        input.addEventListener('keyup', e => {
            const recipes = this.$recipe.querySelectorAll('div[class = recipe_card]')
            const elt = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
           // console.log(recipes);
            if(elt.length >= 3) {
                //console.log(elt);        
            }
        })

    }

    
    dropDownSection() {
       // console.log(this.$wrapper.querySelector('#drop_down_appareils'));
        const el = this.$wrapper.querySelector('#drop_down_appareils')
        const section = this.$wrapper.querySelector('#appareils_list')
       // console.log(this.$wrapper.querySelector('i'));
        const icone = this.$wrapper.querySelector('i')
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
        const labelInputAppareils = document.createElement('label')
        labelInputAppareils.setAttribute('for', 'input_appareils')
        const inputAppareils = document.createElement('input')
        inputAppareils.setAttribute('id', 'input_appareils')
        inputAppareils.setAttribute('placeholder', 'Rechercher un appareil')
        inputAppareils.setAttribute('value', 'Appareils')

        //button arrow 
        const btnDropDown = document.createElement('button')
        btnDropDown.setAttribute('class', 'drop_down')
        btnDropDown.setAttribute('id', 'drop_down_appareils')
        const iconBtnDropDown = document.createElement('i')
        iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down')
        btnDropDown.appendChild(iconBtnDropDown)
       

        // ingredients list
        const appareilsSection = document.createElement('ul')
        appareilsSection.setAttribute('id', 'appareils_list')
        appareilsSection.setAttribute('class', 'list')
        appareilsSection.style.display = "none"

        const appareilTab = []
        for(let i = 0; i < this._recipes.length; i++) {
            // console.log(this._recipes[i].ingredients);
            let appliances = this._recipes[i].appliance     
          //  console.log(appliances);
            let appareilToLowerCase = appliances.toLowerCase()
            let appareilSyntax = appareilToLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            appareilTab.push(appareilSyntax)      
        }
        
        that.$wrapper.appendChild(appareilsSection)
        that.$wrapper.appendChild(labelInputAppareils)
        that.$wrapper.appendChild(inputAppareils)
        that.$wrapper.appendChild(btnDropDown)
        

        that.dropDownSection()

        let uniqueAppareilsTab = [...new Set(appareilTab)]
        //console.log(uniqueIngredientTab);
        uniqueAppareilsTab.forEach(element => {
            //console.log(element);
            const appareilItem = document.createElement('li')   
            appareilItem.setAttribute('class', element)
            appareilItem.setAttribute('id', element)        
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1)
            appareilItem.innerHTML= elementSyntax  
            appareilsSection.appendChild(appareilItem) 
           // that.handleIngredients(element)   
                
        });

        that.handleAppareil()
        return that.$wrapper
    }

}