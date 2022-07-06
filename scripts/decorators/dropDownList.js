// FUNCTION HANDLE DROP DOWN LIST
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

function filterOnINputSearch(input) {
    let listIngredient = document.querySelectorAll('li[class=ingredient_from_list]')

    console.log(document.getElementById('ingredient_list'));
    if(input === document.getElementById('input_ingredients')) {
        input = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        listIngredient.forEach(element => {
            if(element.getAttribute('name').includes(input)) {
                element.style.display = "block"
                console.log('element', element);
            }else{
                element.style.display = "none"
            }
        })
    }

}


