class Appareils{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'appareils_search_bar') 
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes = recipes   
    }

    
    handleDropDown(button, icone, list, input) {
        button.addEventListener('click', e => {
            dropDownList(button, icone, list)
        })

        input.addEventListener('click', e =>{
            e.target.value = ''
            dropDownList(button, icone, list)
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
       

        const applianceSection = document.createElement('ul')
        applianceSection.setAttribute('id', 'appliance_list')
        applianceSection.setAttribute('class', 'list')
        applianceSection.style.display='none'
        const appareilTab = []
        for(let i = 0; i < this._recipes.length; i++) {
            // console.log(this._recipes[i].ingredients);
            let appliances = this._recipes[i].appliance     
          //  console.log(appliances);
            let appareilToLowerCase = appliances.toLowerCase()
            let appareilSyntax = appareilToLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            appareilTab.push(appareilSyntax)      
        }
        let uniqueAppareilsTab = [...new Set(appareilTab)]
        //console.log(uniqueIngredientTab);
        uniqueAppareilsTab.forEach(element => {
            //console.log(element);
            const appareilItem = document.createElement('li')   
            appareilItem.setAttribute('class', 'appareils_from_list')
            appareilItem.setAttribute('name', element)        
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1)
            appareilItem.innerHTML= elementSyntax  
            applianceSection.appendChild(appareilItem) 
           // that.handleIngredients(element)   
                
        });

        that.$wrapper.appendChild(applianceSection)
        that.$wrapper.appendChild(labelInputAppareils)
        that.$wrapper.appendChild(inputAppareils)
        that.$wrapper.appendChild(btnDropDown)
        

        //functions
        that.handleDropDown(btnDropDown, iconBtnDropDown, applianceSection, inputAppareils)
        return that.$wrapper
    }

}