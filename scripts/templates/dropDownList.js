function dropDownList(button, icone, list) {
    if(list) {
        if(button.getAttribute('open')) {
            button.removeAttribute('open')
            icone.removeAttribute('class')
            icone.setAttribute('class', 'fa fa-chevron-down' )
            list.style.display = 'none'
        }
        else{
            button.setAttribute('open', 'true')
            icone.removeAttribute('class')
            icone.setAttribute('class', 'fa fa-chevron-up' )
            list.style.display = 'block'
           
        }   
    }
 
}


function createHTMLTag(container, list, tag, recipesAll) {
 
    let createTagHtml = document.createElement('p')
    createTagHtml.setAttribute('class', tag.getAttribute('id'))
    createTagHtml.innerHTML = tag.getAttribute('id')
    //create button tag
    let createTagButton = document.createElement('button')
    createTagButton.setAttribute('class', 'tag_button')
    createTagButton.innerHTML = 'x' 
    createTagHtml.appendChild(createTagButton)

    //verifier si existe deja
    container.appendChild(createTagHtml) 

    


    //check if tag already exist          
    for(let i = 0; i < container.querySelectorAll('p').length; i++) {
        if(container.querySelectorAll('p')[i].getAttribute('class') === createTagHtml.getAttribute('class')) {
            container.querySelectorAll('p')[i].setAttribute('match', 'true')
            tag.style.display = 'none'
            break
        }else{
            container.querySelectorAll('p')[i].removeAttribute('match')
            tag.style.display = 'none'
        }
    }
   

}


function handleOnClickTag(tag, recipe, recipeElement, attribute, recipesAll) {
    let recipeElementTab = recipeElement.querySelectorAll('li') 
   
    if(recipeElementTab.length > 0) {
        for(let i = 0; i < recipeElementTab.length; i++) {
            if(recipeElementTab[i].getAttribute('class') === tag.getAttribute('id')) {      
                recipe.setAttribute(attribute, 'active')
                break         
            }else{
               recipe.removeAttribute(attribute)
            }
        }
    }else{
        recipeElement = recipeElement.innerHTML.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(recipeElement === tag.getAttribute('id')) {      
            recipe.setAttribute(attribute, 'active')        
        }else{
           recipe.removeAttribute(attribute)
        }
    }
   
}



