class HomePage {
    constructor () {
        //creation main wrapper
        this.$mainWrapper = document.getElementById('main')
        
        // import recipe data
        this.recipesApi = new RecipesListApi('scripts/data.json')

        //creation container recipes
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('id', 'recipe_wrapper')

        //creation tag containers (for each category)
        this.$tagContainer = document.createElement('ul') 
        this.$tagContainer.setAttribute('id','tags_container') 

        // MESSAGE ERROR
        this.errorMessage = document.createElement('div')
        this.errorMessage.setAttribute('id', 'error_message')
    }

    async main () {
        
        const recipesData =  await this.recipesApi.getRecipes()
       // console.log('DATA API', recipesData.recipes);
        const recipesDataTab = recipesData.recipes

       
        const RecipeTab = recipesDataTab.map(recipe => {
           return new Recipe(recipe)
        });
  

       this.$mainWrapper.appendChild(this.$wrapper)

        const TemplateMainSearchBar = new MainSearchBar()
        const TemplateSecondarySearchBar = new SecondarySearchBar(RecipeTab)

        console.log(TemplateSecondarySearchBar.$wrapper.querySelectorAll('article'));
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

        this.$wrapper.appendChild(this.errorMessage)


        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.addEventListener('keyup', e => {
                if(input.value.length >= 3) {
                    setAttributeRecipeInput(this.$wrapper, input)
                    displayRecipe(this.$wrapper)
                    displayItemsCategory(this.$wrapper)              
                    displayMessageError(this.$wrapper)
                }  
                else {
                    removeAttributeRecipeInput(this.$wrapper, input)
                    displayRecipe(this.$wrapper)
                    displayItemsCategory(this.$wrapper)  
                   
                }             
            })  
            
        });   

        //function display recipe click tag
        handleTag(this.$wrapper, this.$tagContainer)
        displayItemSelection(this.$wrapper)
       
      
       
    }
}


const home = new HomePage()
home.main()