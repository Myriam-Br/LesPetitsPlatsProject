function displayRecipes(params) {
//console.log('RECIPES',params);
//console.log('RECIPE',params.querySelectorAll('div[filterByName = active]'));
const recipes = params.querySelectorAll('div[class = recipe_card]')
const nameFilter = params.querySelectorAll('div[nameFilter = active]')
const ingredientFilter = params.querySelectorAll('div[ingredientFilter = active]')
console.log(ingredientFilter);
console.log(nameFilter);
// console.log(nameFilter);
    // filter through all the recipes
    for(let i = 0; i < recipes.length; i++) {
  
        if(nameFilter.length > 0 || ingredientFilter.length > 0){
            // name filter
            if(nameFilter.length > 0) {  
                //console.log(recipes[i].getAttribute('nameFilter'));
                if(recipes[i].getAttribute('nameFilter')==='active') {
                    console.log(recipes[i]);
                    recipes[i].style.display = 'block'         
                }
                else{
                    recipes[i].style.display = 'none'
                }

            }

            // ingredient filter
            if(ingredientFilter.length > 0) {           
                if(recipes[i].getAttribute('ingredientFilter')==='active') {
                console.log(recipes[i]);
                recipes[i].style.display = 'block'
                }
                else{
                    recipes[i].style.display = 'none'
                }         
            }


            if(recipes[i].getAttribute('ingredientFilter') === 'active' && recipes[i].getAttribute('nameFilter') === 'active' ) {
                console.log('we have a match', recipes[i]);
                //recipes[i].style.backgroundColor = "green"
            }

            
        }
       
      
        
        // if no filter active
        else{
            //console.log('else');
            recipes[i].style.display = 'block'
           // recipes[i].style.backgroundColor = "aliceblue"
        }
        
    }
    
}