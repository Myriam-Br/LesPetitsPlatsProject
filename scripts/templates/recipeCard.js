class RecipeCard{
    constructor (recipe){
        this._recipe = recipe
       // console.log(recipe);
        //console.log(recipe.ingredients[0]);
        
    }

    createCard (){

        const that = this
        
        const wrapperCard = document.createElement('div')
        wrapperCard.setAttribute('class', 'recipe_card')
        wrapperCard.setAttribute('id', this._recipe.id)
        // image
        const imageRecipe = document.createElement('img')
        imageRecipe.setAttribute('alt', 'name_recipe_img')
        imageRecipe.setAttribute('src', 'assets/pizza.jpg')

        // text section
        const textSection = document.createElement('div')
        textSection.setAttribute('class', 'text_section')
        //name
        const nameRecipe = document.createElement('h2')
        nameRecipe.setAttribute('class', 'name_recipe')
        nameRecipe.innerHTML = this._recipe.name


        // duration
        const durationIcone = document.createElement('i')
        durationIcone.setAttribute('class', 'fa fa-clock-o')
        const durationRecipe = document.createElement('h3')
        durationRecipe.setAttribute('class', 'duration_recipe')
        durationIcone.appendChild(durationRecipe)
        durationRecipe.innerHTML = this._recipe.time + 'min'


        // ingredients list
        const ingredientsList = document.createElement('ul')
        ingredientsList.setAttribute('class', 'ingredient_recipe_list')

        const ingredientsListItem = document.createElement('li')
        ingredientsListItem.setAttribute('class', 'ingredient_from_list')
        const ingredientsListItemQte = document.createElement('p')
        ingredientsListItemQte.setAttribute('class', 'ingredient_quantity')
        ingredientsListItem.appendChild(ingredientsListItemQte)

        this._recipe.ingredients[0].forEach(elt => {
           // console.log(elt.ingredient);
            const ingredientsListItem = document.createElement('li')
            const syntaxIngredientClassName = elt.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ingredientsListItem.setAttribute('class', syntaxIngredientClassName)
            ingredientsListItem.innerHTML = elt.ingredient
           
            //console.log(elt.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            ingredientsList.appendChild(ingredientsListItem)          
        });
      //  console.log(ingredientsList);
        const instructionsRecipe = document.createElement('h4')
        instructionsRecipe.setAttribute('class', 'instructions_repicpe')
        instructionsRecipe.innerHTML = this._recipe.description
     


        wrapperCard.appendChild(imageRecipe)
        textSection.appendChild(nameRecipe)
        textSection.appendChild(durationRecipe)
        textSection.appendChild(ingredientsList)
        textSection.appendChild(instructionsRecipe)
        wrapperCard.appendChild(textSection)


        return wrapperCard

    }
}