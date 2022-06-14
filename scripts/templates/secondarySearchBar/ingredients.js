class Ingredients{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ingredients_search_bar')
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
   
    }

    
    // drop down to display the ingredients list
    dropDownSection() {
       // console.log(this.$wrapper.querySelector('#drop_down_ingredients'));
        const el = this.$wrapper.querySelector('.drop_down')
        //const section = this.$wrapper.querySelector('.list')
        const icone = this.$wrapper.querySelector('i')
        el.addEventListener('click', () => {
            /*
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


    createSearchBar (){
        const that = this
        
        // CREATE INGREDIENTS SEARCH BAR DOM

        // input
        const labelInputIngredients = document.createElement('label')
        labelInputIngredients.setAttribute('for', 'input_ingredients')
        

        const inputIngredients = document.createElement('input')
        inputIngredients.setAttribute('id', 'input_ingredients')
        inputIngredients.setAttribute('placeholder', 'Rechercher un ingrédient')
        inputIngredients.setAttribute('value', 'Ingrédients')
        
        

        //button arrow 
        const btnDropDown = document.createElement('button')
        btnDropDown.setAttribute('class', 'drop_down')
        btnDropDown.setAttribute('id', 'drop_down_ingredients')
        const iconBtnDropDown = document.createElement('i')
        iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down')
        btnDropDown.appendChild(iconBtnDropDown)
   

        that.$wrapper.appendChild(labelInputIngredients)
        that.$wrapper.appendChild(inputIngredients)
        that.$wrapper.appendChild(btnDropDown)
        
        that.dropDownSection()

        return that.$wrapper
    }

}

