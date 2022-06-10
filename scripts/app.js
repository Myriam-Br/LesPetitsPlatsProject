class HomePage {
    constructor () {
        this.$mainWrapper = document.getElementById('main')
        this.recipesApi = new RecipesListApi('scripts/data.json')
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('id', 'recipe_wrapper')
        this.$sectionItemAdded = document.createElement('div')  
        this.$sectionItemAdded.setAttribute('id', 'items_added')
       // console.log(new Recipe());
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
  

        //console.log(RecipeTab);
       // const Recipes = new Recipe(recipesData)
        //console.log(Recipes);
       this.$mainWrapper.appendChild(this.$wrapper)

        const TemplateMainSearchBar = new MainSearchBar()

        const TemplateSecondarySearchBar = new SecondarySearchBar(RecipeTab)

      
        this.$mainWrapper.appendChild(
            TemplateMainSearchBar.createSearchBar()
        )
        this.$mainWrapper.appendChild(this.$sectionItemAdded)
        
        this.$mainWrapper.appendChild(
            TemplateSecondarySearchBar.createSearchBar()
        )

        RecipeTab.forEach(recipe => {
            const TemplateRecipe =  new RecipeCard(recipe)   
            this.$wrapper.appendChild(
                TemplateRecipe.createCard()
            )
        });

        console.log(document.querySelectorAll('input'));
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            console.log(input.value.length);
            input.addEventListener('keyup', e => {
                console.log(e);
                if(input.value.length >= 3) {
                    displayRecipes(this.$wrapper)
                }  else {
                    
                }        
            })    
               
        });       
    }
}


const home = new HomePage()
home.main()