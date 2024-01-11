class RecipeCard{
    constructor (recipe){
        this._recipe = recipe
       //console.log(recipe);
        //console.log(recipe.ingredients[0]);
        
    }

    createCard (){

        const that = this
        
        const wrapperCard = document.createElement('div')
        wrapperCard.setAttribute('class', 'recipe_card')
        wrapperCard.setAttribute('id', this._recipe.id)
        // image
        const imageRecipe = document.createElement('div')
<<<<<<< HEAD
        imageRecipe.setAttribute('class', 'image')
=======
        imageRecipe.setAttribute('class', 'name_recipe_img')
>>>>>>> algorithm/for

        // text section
        const textSection = document.createElement('div')
        textSection.setAttribute('class', 'text_section')
        //name
        const nameRecipe = document.createElement('h2')
        nameRecipe.setAttribute('class', 'name_recipe')
        const recipeName = this._recipe.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        nameRecipe.setAttribute('name', recipeName)
        nameRecipe.innerHTML = this._recipe.name

        

        // duration
        const durationIcone = document.createElement('i')
        durationIcone.setAttribute('class', 'fa fa-clock-o')
        const durationRecipe = document.createElement('h3')
        durationRecipe.setAttribute('class', 'duration_recipe')
        durationIcone.appendChild(durationRecipe)
        durationRecipe.innerHTML = this._recipe.time + 'min'


        //HANDLE INGREDIENTS LIST
        const ingredientsList = document.createElement('ul')
        ingredientsList.setAttribute('class', 'ingredient_recipe_list')
        const ingredientsListItemQte = document.createElement('p')
        ingredientsListItemQte.setAttribute('class', 'ingredient_quantity')
        this._recipe.ingredients[0].forEach(elt => { 
            
            //HANDLE DATA SYNTAX
            // unit
            if(elt.unit === undefined) {
                elt.unit = ''
            }
            if(elt.unit === 'grammes' ||elt.unit === 'gramme'){
                elt.unit = "gr"
            }
            
            // quantity
            if(elt.quantity){
                elt.quantity = ':' + ' '+ elt.quantity
            }
            if(elt.quantity === undefined) {
                elt.quantity = ''
            }      

            //create li for each ingredients (+unit and qt)
            const ingredientsListItem = document.createElement('li')
            const syntaxIngredientClassName = elt.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ingredientsListItem.setAttribute('name', syntaxIngredientClassName)
            ingredientsListItem.setAttribute('class', 'ingredient')
            ingredientsListItem.innerHTML = elt.ingredient  + elt.quantity + elt.unit
            ingredientsList.appendChild(ingredientsListItem)          
        });
      //  console.log(ingredientsList);
        const instructionsRecipe = document.createElement('h4')
        instructionsRecipe.setAttribute('class', 'instructions_repicpe')
        instructionsRecipe.innerHTML = this._recipe.description


        // HANDLE USTENSIL LIST (DISPLAY NONE)
        const ustensilList = document.createElement('ul')
        ustensilList.setAttribute('class', 'ustensil_recipe_list')
        this._recipe.ustensils.forEach(elt => {
           // console.log(elt);
            const ustensilsRecipe = document.createElement('li')
            const syntaxUstensilClassName = elt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ustensilsRecipe.setAttribute('name', syntaxUstensilClassName)
            ustensilsRecipe.setAttribute('class', 'ustensil')
            ustensilsRecipe.innerHTML = elt
            ustensilList.appendChild(ustensilsRecipe)
        })
     
        // HANDLE APPAREIL LIST (DISPLAY NONE)
       //console.log(this._recipe.appliance);
       const applianceRecipe = document.createElement('h4')
       const syntaxApplianceClassName = this._recipe.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
       applianceRecipe.setAttribute('name',  syntaxApplianceClassName)
       applianceRecipe.setAttribute('class',  'appliance')
       applianceRecipe.innerHTML = this._recipe.appliance


        wrapperCard.appendChild(imageRecipe)
        textSection.appendChild(nameRecipe)
        textSection.appendChild(durationRecipe)
        textSection.appendChild(ingredientsList)
        textSection.appendChild(instructionsRecipe)      
        textSection.appendChild(ustensilList)      
        textSection.appendChild(applianceRecipe)      
        wrapperCard.appendChild(textSection)


        return wrapperCard

    }
}