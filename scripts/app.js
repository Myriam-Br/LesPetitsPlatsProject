class HomePage {
    constructor () {
        this.$mainWrapper = document.getElementById('main')
        this.recipesApi = new RecipesListApi('scripts/data.json')
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('id', 'recipe_wrapper')
         //creation tag containers (for each category)
         this.$tagContainer = document.createElement('article') 
         this.$tagContainer.setAttribute('id','tags_container') 
         this.$ingredientTags = document.createElement('ul')  
         this.$ingredientTags.setAttribute('id', 'ingredients_added') 
         this.$ustensilTags = document.createElement('ul')  
         this.$ustensilTags.setAttribute('id', 'ustensils_added') 
         this.$appareilTags = document.createElement('ul') 
         this.$appareilTags.setAttribute('id', 'appareils_added')
         this.$tagContainer.appendChild(this.$ingredientTags)
         this.$tagContainer.appendChild(this.$ustensilTags)
         this.$tagContainer.appendChild(this.$appareilTags)
    }

    async main () {
        
        const recipesData =  await this.recipesApi.getRecipes()
       // console.log('DATA API', recipesData.recipes);
        const recipesDataTab = recipesData.recipes

        const RecipeTab = recipesDataTab.map(recipe => {
          // console.log(recipe);
          // console.log(new Recipe(recipe));
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
                if(input.value.length >= 3) {
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