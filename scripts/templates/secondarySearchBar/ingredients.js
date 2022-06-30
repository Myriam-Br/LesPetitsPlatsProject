class Ingredients{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ingredients_search_bar')
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
        this.$tagContainerIngredients = document.getElementById('ingredients_added')
    }


    handleIngredient(button, icone, list) {
        //console.log(list.querySelectorAll('li'));
       
        const input = this.$wrapper.querySelector('#input_ingredients')
        input.addEventListener('keyup', e => {
            const elt = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")  
            if(elt.length >= 3) {   
                handleAttributeIngredientInput(this.$recipe, elt)
            }
            else{
                const attributeName = 'ingredientFilter'
                removeAttributeFromRecipe(this.$recipe, attributeName)
            }     
        })

        input.addEventListener('click', e => { 
            input.value = ' ' 
            list.style.display = "block"
            dropDownList(button, icone, list)         
        })

        //HANDLE TAGS ON CLICK 
        //create tag for each element selected from list 
        for(let i = 0; i < list.querySelectorAll('li').length; i++) {
            let tag = list.querySelectorAll('li')[i]  
            tag.addEventListener('click', e => {
                createHTMLTag(this.$tagContainerIngredients, tag)   
                handleAttributeIngredientTag(this.$recipe, tag, this.$tagContainerIngredients)   
                handleAttributeRecipe(this.$recipe, this.$tagContainerIngredients) 
                displayRecipes(this.$recipe)    
            })  
            
            
        } 
     
    }


    handleDropDown(button, icone, list) {
        button.addEventListener('click', e => {
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
   

        
        // ingredients list
        const ingredientsSection = document.createElement('ul')
        ingredientsSection.setAttribute('id', 'ingredients_list')
        ingredientsSection.setAttribute('class', 'list')
        ingredientsSection.style.display = "none"

        
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

        that.$wrapper.appendChild(ingredientsSection)
        that.$wrapper.appendChild(labelInputIngredients)
        that.$wrapper.appendChild(inputIngredients)
        that.$wrapper.appendChild(btnDropDown)
        
    
        //retirer les doublons du tableau
        let uniqueIngredientTab = [...new Set(ingredientsTab)]
        //console.log(uniqueIngredientTab);
        uniqueIngredientTab.forEach(element => {
            const ingredientItem = document.createElement('li')   
            ingredientItem.setAttribute('name', element)
            ingredientItem.setAttribute('class', 'ingredient_from_list')  
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1)
            ingredientItem.innerHTML= elementSyntax  
            ingredientsSection.appendChild(ingredientItem) 
               
        });
    
       
        that.handleIngredient(btnDropDown, iconBtnDropDown, ingredientsSection)
        that.handleDropDown(btnDropDown, iconBtnDropDown,ingredientsSection)
        
        return that.$wrapper
    }

}

