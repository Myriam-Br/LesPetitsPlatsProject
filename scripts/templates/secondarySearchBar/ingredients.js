class Ingredients{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ingredients_search_bar')
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
        this.$tagContainer = document.getElementById('tags_container')
   
    }


    handleDropDown(button, icone, list, input) {
        button.addEventListener('click', e => {
            dropDownList(button, icone, list)
            displayItemSelection(this.$recipe)
        })
        input.addEventListener('click', e =>{
            dropDownList(button, icone, list)
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
   
        const ingredientsSection = document.createElement('ul')
        ingredientsSection.setAttribute('id', 'ingredient_list')
        ingredientsSection.setAttribute('class', 'list')
        ingredientsSection.style.display='none'
   
        const ingredientsTab = []

        for(let i = 0; i < this._recipes.length; i++) {
            // console.log(this._recipes[i].ingredients);
            let ingredients = this._recipes[i].ingredients      
            for(let j = 0; j < ingredients.length; j++) {
                //console.log(ingredients[j]);
                let ingredientsList = ingredients[j]
                //console.log(ingredients[j]);
            
                for (let k = 0; k < ingredientsList.length; k++) {
                    let ingredientToLowerCase = ingredientsList[k].ingredient.toLowerCase()
                    let ingredientSyntax = ingredientToLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    ingredientsTab.push(ingredientSyntax)        

                }        
            }
        }

        //retirer les doublons du tableau
        let uniqueIngredientTab = [...new Set(ingredientsTab)]
        //console.log(uniqueIngredientTab);
        uniqueIngredientTab.forEach(element => {
            const ingredientItem = document.createElement('li')  
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1) 
            ingredientItem.setAttribute('name', element)
            //console.log(element);
            ingredientItem.setAttribute('class', 'ingredient_from_list')  
            ingredientItem.innerHTML= elementSyntax  
            ingredientsSection.appendChild(ingredientItem) 
            
        });
        

        that.$wrapper.appendChild(labelInputIngredients)
        that.$wrapper.appendChild(inputIngredients)
        that.$wrapper.appendChild(btnDropDown)
        that.$wrapper.appendChild(ingredientsSection)
        

        //functions
        that.handleDropDown(btnDropDown, iconBtnDropDown, ingredientsSection, inputIngredients )
        return that.$wrapper
    }

}

