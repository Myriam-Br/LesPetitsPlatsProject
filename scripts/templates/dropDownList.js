function dropDownList(recipe, inputContainer) {
    //console.log(recipe);
    console.log(recipe.querySelectorAll('div[nameFilter=active]'));
    console.log(inputContainer);
    const button = inputContainer.querySelector('button')
   
   
  
    button.addEventListener('click', e => {

        if(button.getAttribute('dropDown') === 'active') {
            button.removeAttribute('dropDown')

            //icone arrow down
            button.querySelector('i').removeAttribute('fa fa-chevron-up')
            button.querySelector('i').setAttribute('class','fa fa-chevron-down')        
            console.log(button);
        }
        else{
            const containerList =  document.createElement('ul')
            button.setAttribute('dropDown', 'active')

            //icone arrow up
            button.querySelector('i').removeAttribute('fa fa-chevron-down')
            button.querySelector('i').setAttribute('class','fa fa-chevron-up')
            console.log(button);

            
            //create container list   
            containerList.setAttribute('class', 'list')
            containerList.setAttribute('id', 'list' + ' ' + inputContainer.getAttribute('id'))
            inputContainer.appendChild(containerList)

            //handle creation li ingredients
           
            const recipeList = recipe.querySelectorAll('div[nameFilter=active]')
            for(let i = 0; i < recipeList.length; i++) {
                console.log(recipeList[i].querySelector('.ingredient_recipe_list').querySelectorAll('li'));
                const ingredientRecipeList = recipeList[i].querySelector('.ingredient_recipe_list').querySelectorAll('li')
                for (let j = 0; j < ingredientRecipeList.length; j++) {
                    console.log(ingredientRecipeList[j].getAttribute('class'));
                    const ingredientUnit = ingredientRecipeList[j].getAttribute('class')
                    const createHtmlIngredientUnit = document.createElement('li')
                    createHtmlIngredientUnit.setAttribute('class', 'item' + ingredientUnit)
                    createHtmlIngredientUnit.innerHTML = ingredientUnit
                    containerList.appendChild(createHtmlIngredientUnit)
                }
            }
          
           
        }
    })
}

function clearListContainer(containerList) {
console.log(containerList);
}