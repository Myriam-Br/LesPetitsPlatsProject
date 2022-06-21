function dropDownList(button, icone, list) {
    if(list) {
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
    }
 
}


function handleTag(recipe, container, list, attribute, recipeWrapper) {
   // console.log(recipeWrapper);
    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', e => {
            //console.log(list[i].getAttribute('class'));
            for(let j = 0; j < recipe.length; j++) {
                //console.log(recipe[j].querySelector('.ingredient_recipe_list').querySelectorAll('li'));
                let ingredientInRecipe = recipe[j].querySelector('.ingredient_recipe_list').querySelectorAll('li')
                for(let k = 0; k < ingredientInRecipe.length; k++) {
                   // console.log(ingredientInRecipe[k].getAttribute('class'));
                    if(list[i].getAttribute('class') === ingredientInRecipe[k].getAttribute('class')) {            
                        recipe[j].setAttribute(attribute, 'active')
                        test(recipe[j])
                        createHTMLTag(recipe, container, list[i],recipeWrapper, attribute)
                        displayRecipes(recipeWrapper)   
                        break               
                    }else{
                        recipe[j].removeAttribute(attribute)                    
                    }
                }
            }
        })

       
    }
  
}


function createHTMLTag(recipe, container, listItem, recipeWrapper, attribute) {
    console.log(recipe);
    console.log(attribute);
   // console.log(recipe.querySelectorAll(`div[${attribute} = active]`));
    //create tag html
    for(let x = 0; x < recipe.length; x++){
        
        if(recipe[x].getAttribute(attribute)) {
            console.log(recipe[x]);
        }
    }
    let createTagHtml = document.createElement('p')
    createTagHtml.setAttribute('class', listItem.getAttribute('class'))
    createTagHtml.innerHTML = listItem.getAttribute('class')
    //create button tag
    let createTagButton = document.createElement('button')
    createTagButton.setAttribute('class', 'tag_button')
    createTagButton.innerHTML = 'x' 
    createTagHtml.appendChild(createTagButton)
    container.appendChild(createTagHtml) 
   
   

    //check if tag already exist          
    for(let i = 0; i < container.querySelectorAll('p').length; i++) {
       // console.log(container.querySelectorAll('p')[i].getAttribute('class'));
        if(container.querySelectorAll('p')[i].getAttribute('class') === createTagHtml.getAttribute('class')) {
            console.log('exist');
        }else{
        }
    }

    //set attribute and delete element from list if exist in tag container
    for(let j = 0; j < container.querySelectorAll('p').length; j++) {     
        if(container.querySelectorAll('p')[j].getAttribute('class') === listItem.getAttribute('class')) {      
            listItem.style.display = 'none'
            listItem.setAttribute('show', 'false')
        }
    }

    //delete tag from container and show element in list
    if(listItem.getAttribute('show')) {
        createTagButton.addEventListener('click', e => {
            listItem.style.display = 'block'
            listItem.removeAttribute('show')
            createTagHtml.remove()  
            if(container.querySelectorAll('p').length === 0) {
                console.log('empty');
                displayAllRecipes(recipeWrapper)
                removeAttributeFromRecipe(recipeWrapper, attribute)
            }     
        })
    }

  

    //console.log(attribute, recipeWrapper);

   
}

function test(params) {
    //console.log(params);
    console.log(params.querySelector('.ingredient_recipe_list').querySelectorAll('li'));
    
}

