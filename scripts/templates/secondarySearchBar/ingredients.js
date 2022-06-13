class Ingredients{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ingredients_search_bar')
        this.$recipe = document.getElementById('recipe_wrapper')
        this._recipes  = recipes
        console.log(document.querySelectorAll('div[nameFilter = active]'));
        this.$recipesActive = this.$recipe.querySelectorAll('div[nameFilter = active]')
    }


    handleIngredient() {
        //console.log(this.$recipe);
        const input = this.$wrapper.querySelector('#input_ingredients')
        //console.log();
        document.querySelector('#input_main_search_bar')
        //console.log(document.querySelector('#input_main_search_bar').value);
   
        input.addEventListener('keyup', e => {
            const recipesActive = this.$recipe.querySelectorAll('div[nameFilter = active]')
            console.log(recipesActive);
            if(input.value.length >= 3) {
                
                //console.log(e);
                const elt = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")  
               // const recipes = this.$recipe.querySelectorAll('div[class = recipe_card')

                for(let i = 0; i < recipesActive.length; i++) {
                    const ingredientsInRecipe = recipesActive[i].querySelector('ul').querySelectorAll('li')
                    for(let j = 0; j < ingredientsInRecipe.length; j++ ){
                        
                        const ingredient =  ingredientsInRecipe[j].getAttribute('class')
                        if(ingredient.includes(elt)) {  
                            recipesActive[i].setAttribute('ingredientFilter', 'active')
                            //console.log(recipes[i]);
                            break
                        }else{
                            recipesActive[i].removeAttribute('ingredientFilter')
                        }
                    }

                }
            }
            
        })
     
        
    }

    
    // drop down to display the ingredients list

    // add/remove ingredient to the sectionAddedIngredient 


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
   

        /*
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
        }*/

        //that.$wrapper.appendChild(ingredientsSection)
        that.$wrapper.appendChild(labelInputIngredients)
        that.$wrapper.appendChild(inputIngredients)
        that.$wrapper.appendChild(btnDropDown)
      
       
        /*
        //retirer les doublons du tableau
        let uniqueIngredientTab = [...new Set(ingredientsTab)]
        //console.log(uniqueIngredientTab);
        uniqueIngredientTab.forEach(element => {
            //console.log(element);
            const ingredientItem = document.createElement('li')   
            ingredientItem.setAttribute('class', element)
            ingredientItem.setAttribute('id', element)        
            const elementSyntax = element.charAt(0).toUpperCase() + element.slice(1)
            ingredientItem.innerHTML= elementSyntax  
            ingredientsSection.appendChild(ingredientItem) 
               
        });*/
      
        //console.log(this.$recipe);
        //console.log(this.$recipe.querySelectorAll('div[class=recipe_card]'));

        that.handleIngredient()
        return that.$wrapper
    }

}

