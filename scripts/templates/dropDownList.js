function dropDownList(button, icone, list) {
  button.addEventListener('click', e => { 
    if(button.getAttribute('open')) {
        button.removeAttribute('open')
        icone.removeAttribute('class')
        icone.setAttribute('class', 'fa fa-chevron-down' )
        list.style.display = 'none'
       
    }else{
        button.setAttribute('open', 'true')
        icone.removeAttribute('class')
        icone.setAttribute('class', 'fa fa-chevron-up' )
        list.style.display = 'block'
       
    } 
   
  })
   
}

/*

//
function handleTag(param, tagContainer, list, recipe) { 
    console.log(param); 
    param = param.querySelectorAll('li')
   for(let i = 0; i < param.length; i++) {
    param[i].addEventListener('click', e => {
        
        createTag(param[i].getAttribute('class'), tagContainer, list, recipe)
    })
   }
}

function createTag(param, tagContainer, list, recipe) {
   
    //create p tag
    let createTagHtml = document.createElement('p')
    createTagHtml.setAttribute('class', param)
    createTagHtml.innerHTML = param
    //create button tag
    let createTagButton = document.createElement('button')
    createTagButton.setAttribute('class', 'tag_button')
    createTagButton.innerHTML = 'x' 
    createTagHtml.appendChild(createTagButton)
    tagContainer.appendChild(createTagHtml)

    setAttributeRecipe(recipe)
    //handle button tag
    handleDisplayTag(tagContainer, list)

    //handle button delete tag
    createTagButton.addEventListener('click', e => {
        //console.log(tagContainer);
        list = list.querySelectorAll('li')
        for(let i = 0; i < list.length; i++) {
            //console.log(list[i]);
            if(list[i].getAttribute('show')) {
                console.log(list[i]);          
                if(list[i].getAttribute('class') === createTagHtml.getAttribute('class')) {
                    list[i].removeAttribute('show')
                    list[i].style.display = 'block'
                    
                }
            }
        }
        createTagHtml.remove()  
    })


}

function handleDisplayTag(container, list) {
    list  = list.querySelectorAll('li')
    container  = container.querySelectorAll('p')
     for(let i = 0; i < container.length; i++) {
        for(let j = 0; j < list.length; j++) {
            if(container[i].getAttribute('class') === list[j].getAttribute('class')) {
                list[j].setAttribute('show','false')
                list[j].style.display = 'none'
            }
        }
     }

}


function setAttributeRecipe(recipe) {
    console.log(recipe);
}*/

function handleTag(recipe, container, ingredientList) {
    //console.log(container);  
    ingredientList = ingredientList.querySelectorAll('li')
   // console.log(recipe);
   // recipe = recipe.querySelectorAll('.recipe_card')
    //console.log(ingredientList)
   // console.log(recipe);
   // console.log(recipe.querySelectorAll('div[class=recipe_card]'));
    for(let i = 0; i < ingredientList.length; i++) {
        ingredientList[i].addEventListener('click', e => {

            let ingredientFromList = ingredientList[i].getAttribute('class') 
            recipe = recipe.querySelectorAll('div[class=recipe_card]')

            for(let j = 0; j < recipe.length; j++) {
              //  console.log(recipe[j].querySelector('.ingredient_recipe_list').querySelectorAll('li'));
                let ingredientsListRecipe = recipe[j].querySelector('.ingredient_recipe_list').querySelectorAll('li')
                for(let h = 0; h < ingredientsListRecipe.length; h++) {
                    //console.log(ingredientsListRecipe[h].getAttribute('class'));
                    let ingredient = ingredientsListRecipe[h].getAttribute('class')
                    if(ingredient == ingredientFromList) {
                        if(!recipe[j].getAttribute('ingredientFilter')) {
                            console.log(recipe[j]);
                            recipe[j].setAttribute('ingredientFilter', 'active')
                        }else{
                            console.log('else');
                        }
                       

                    }
                }
            }
        })
    }




    createHTMLTag(container)
    

}

function createHTMLTag(container) {
    //create tag html
    let createTagHtml = document.createElement('p')
    //create button tag
    let createTagButton = document.createElement('button')
    createTagButton.setAttribute('class', 'tag_button')
    createTagButton.innerHTML = 'x' 
    createTagHtml.appendChild(createTagButton)
    container.appendChild(createTagHtml) 
}

