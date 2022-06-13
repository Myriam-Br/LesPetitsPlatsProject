function displayRecipes(recipe) {
//console.log('RECIPES',params);
//console.log('RECIPE',params.querySelectorAll('div[filterByName = active]'));
const recipes = recipe.querySelectorAll('div[class = recipe_card]')
const nameFilter = recipe.querySelectorAll('div[nameFilter = active]')
const ingredientFilter = recipe.querySelectorAll('div[ingredientFilter = active]')
const applianceFilter = recipe.querySelectorAll('div[applianceFilter = active]')
const ustensilFitler =  recipe.querySelectorAll('div[ustensilFilter = active]')


const ingredientList = document.getElementById('ingredients_list')

    // filter through all the recipes
    for(let i = 0; i < recipes.length; i++) {
  
        if(nameFilter.length > 0 || ingredientFilter.length > 0 || applianceFilter.length > 0 || ustensilFitler.length > 0){
            
            ///// CAS MONOFILTRE
            // name filter
            if(nameFilter.length > 0) {  
                //console.log(recipes[i].getAttribute('nameFilter'));
                if(recipes[i].getAttribute('nameFilter') ==='active') {
                    //console.log('NAME FILTER:',recipes[i]);
                    recipes[i].style.display = 'block'         
                }
                else{
                    recipes[i].style.display = 'none'
                }

            }

            // ingredient filter
            if(ingredientFilter.length > 0) {           
                if(recipes[i].getAttribute('ingredientFilter') ==='active') {
                //console.log('INGREDIENT FILTER',recipes[i]);
                recipes[i].style.display = 'block'
                }
                else{
                    recipes[i].style.display = 'none'
                }         
            }


            // appliance filter
            if(applianceFilter.length > 0) {    
                if(recipes[i].getAttribute('applianceFilter') ==='active') {
                //console.log('APPLIANCE FILTER',recipes[i]);
                recipes[i].style.display = 'block'
                }
                else{
                    recipes[i].style.display = 'none'
                }         
            }

            // ustensil filter
            if(ustensilFitler.length > 0) {    
                if(recipes[i].getAttribute('ustensilFilter') ==='active') {
                //console.log('USTENSIL FILTER',recipes[i]);
                recipes[i].style.display = 'block'
                }
                else{
                    recipes[i].style.display = 'none'
                }         
            }


            //// CAS MULTIFILTRE
            /*
            if(recipes[i].getAttribute('nameFilter') === 'active' && recipes[i].getAttribute('ingredientFilter') === 'active' || recipes[i].getAttribute('nameFilter') === 'active' && recipes[i].getAttribute('applianceFilter') === 'active' || recipes[i].getAttribute('nameFilter') === 'active' && recipes[i].getAttribute('ustensilFilter') === 'active' ) {
                console.log('we have a match', recipes[i]);
                recipes[i].style.display = 'block'
                //recipes[i].style.backgroundColor = "green"
            }else {
                //console.log('ELSE');
                recipes[i].style.display = 'none'
            }*/
        }
        // if no filter active
        else{
            //console.log('else');
            recipes[i].style.display = 'block'
           // recipes[i].style.backgroundColor = "aliceblue"
        }

     
        
    }
    
}