class SecondarySearchBar{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'secondary_search_bar')
        
        this._recipes = recipes
        //console.log(this._recipes);

    }

    filterActive(){
        //console.log(this.$wrapper.querySelector('#input_ingredients'));
        const ingredientList = this.$wrapper.querySelector('#ingredients_list')
        const ingredientInput = this.$wrapper.querySelector('#input_ingredients')
        const recipeInput = document.getElementById('input_main_search_bar')
        const recipes =  document.querySelector('#recipe_wrapper')

        console.log(recipes.querySelectorAll('div[filter1=active]'));
        ingredientInput.addEventListener('keyup', () => {

            this.searchIngredients(ingredientInput)
                      
        })

        //event listener list
    }

    searchIngredients(input) {
        console.log(input);
        const ingredientInput = this.$wrapper.querySelector('#input_ingredients')
        const recipes =  document.querySelector('#recipe_wrapper')
        const recipeList = recipes.querySelectorAll('div[filter1=active]')


        for(let i = 0; i < recipeList.length; i++) {
            //console.log(recipeList[i]);

            let match = false

            const listIngredient = recipeList[i].querySelector('.ingredient_recipe_list')
            const listIngredientLi = listIngredient.querySelectorAll('li')
           
            for(let j = 0; j < listIngredientLi.length; j++) {
                const ingredientUnit = listIngredientLi[j].getAttribute('class')
              
                if(ingredientInput.value !== ' ' && ingredientInput.value.length >= 3 ) {

                    if(ingredientUnit.toLowerCase().includes(ingredientInput.value.toLowerCase()) || ingredientUnit.toLowerCase() === ingredientInput.value.toLowerCase()) {
                        console.log('SELECTED', recipeList[i]);
                        console.log('true');
                        match = true
                        break
                    }         
                    else{ 
                        //recipeList[i].style.backgroundColor='red'
                        console.log('false');                      
                    }
                }        
                else {
                // console.log('else');
                    recipeList[i].style.display='block'
                    
                }             
            }

            if(match){
                console.log(match);
                recipeList[i].style.display='none'
            }
        }

    }

    createSearchBar(){
        const that = this
      
        const TemplateSearchIngredients = new Ingredients(this._recipes)
        const TemplateSearchAppareils = new Appareils()
        const TemplateSearchUstensiles= new Ustensiles()
        that.$wrapper.appendChild(
             TemplateSearchIngredients.createSearchBar()
        )
        that.$wrapper.appendChild(
            TemplateSearchAppareils.createSearchBar()
        )
        that.$wrapper.appendChild(
            TemplateSearchUstensiles.createSearchBar()
        )

        this.filterActive()
        return that.$wrapper
    }
}