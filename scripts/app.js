class HomePage {
    constructor () {
        this.$mainWrapper = document.getElementById('main')
        this.recipesApi = new RecipesListApi('scripts/data.json')
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('id', 'recipe_wrapper')
        this.$tagContainer = document.createElement('article') 
        this.$tagContainer.setAttribute('id','tags_container') 
        this.$ingredientTags = document.createElement('ul')  
        this.$ingredientTags.setAttribute('id', 'ingredients_added') 
        this.$ustensilTags = document.createElement('ul')  
        this.$ustensilTags.setAttribute('id', 'ustensils_added') 
        this.$tagContainer.appendChild(this.$ingredientTags)
        this.$tagContainer.appendChild(this.$ustensilTags)
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


        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.addEventListener('keyup', e => {
                if(input.value.length >= 3) {
                    displayRecipes(this.$wrapper)
                }  
                else {
                    console.log('cleared');
                    displayAllRecipes(this.$wrapper)
                }        
            })  
            
        });   


        //function display recipe click tag
        
       
    }
}


const home = new HomePage()
home.main()