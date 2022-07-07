class HomePage {
    constructor () {
        this.$mainWrapper = document.getElementById('main')
        this.recipesApi = new RecipesListApi('scripts/data.json')
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('id', 'recipe_wrapper')
         //creation tag containers (for each category)
         this.$tagContainer = document.createElement('ul') 
         this.$tagContainer.setAttribute('id','tags_container') 
    }

    async main () {
        
        const recipesData =  await this.recipesApi.getRecipes()
        const recipesDataTab = recipesData.recipes

        const RecipeTab = recipesDataTab.map(recipe => {
           return new Recipe(recipe)
        });
  
       this.$mainWrapper.appendChild(this.$wrapper)

        const TemplateMainSearchBar = new MainSearchBar()

        const TemplateSecondarySearchBar = new SecondarySearchBar(RecipeTab)

      
        this.$mainWrapper.appendChild(
            TemplateMainSearchBar.createSearchBar()
        )
        this.$mainWrapper.appendChild(this.$tagContainer)
        
        this.$mainWrapper.appendChild(
            TemplateSecondarySearchBar.createSearchBar()
        )

        RecipeTab.forEach(recipe => {
            const TemplateRecipe =  new RecipeCard(recipe)   
            this.$wrapper.appendChild(
                TemplateRecipe.createCard()
            )
        });



        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.addEventListener('keyup', e => {
                if(input.value.length >= 3 && input.value !== ' ') {
                    setAttributeRecipeInput(this.$wrapper, input)
                    displayRecipe(this.$wrapper)
                    displayItemsCategory(this.$wrapper)
                    displayItemSelection(this.$wrapper)
                }  
                else {
                    removeAttributeRecipeInput(this.$wrapper, input)
                    displayRecipe(this.$wrapper)
                    displayItemsCategory(this.$wrapper)   
                    displayItemSelection(this.$wrapper)
                }        
            })  
            
        });   
        
        handleTag(this.$wrapper, this.$tagContainer)
        displayItemSelection(this.$wrapper)
    }
}


const home = new HomePage()
home.main()