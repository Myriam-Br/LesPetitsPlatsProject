class MainSearchBar{
    constructor(){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'main_search_bar')
        this.$recipes = document.getElementById('recipe_wrapper')     
    }

    handleRecipe(){
     
       // const recipes = this.$recipes.querySelectorAll('.recipe_card')
        const input = this.$wrapper.querySelector('#input_main_search_bar')
     

        input.addEventListener('keyup', e => { 
            const ingredientList = document.getElementById('ingredients_list')  
            const recipes = this.$recipes.querySelectorAll('div[class = recipe_card')  
            const elt = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            console.log(ingredientList);

            if(elt.length >= 3) {         
                 //console.log(recipes);
                for (let i = 0; i < recipes.length; i++) {
                   const recipeName = recipes[i].querySelector('.name_recipe').innerHTML.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                   if(recipeName.includes(elt)){
                    recipes[i].setAttribute('nameFilter', 'active')
                    let ingredientInRecipe = recipes[i].querySelector('.ingredient_recipe_list').querySelectorAll('li')
                    handleDisplayListItem(ingredientInRecipe, ingredientList)    
                   
                   }
                   else{          
                    recipes[i].removeAttribute('nameFilter')
                   
                   }
                }

              
            }
            else{
                const attributeName = 'nameFilter'
                removeAttributeFromRecipe(this.$recipes, attributeName)
                displayFullItemList(ingredientList.querySelectorAll('li'))                
            }
           
            
        })
}


    createSearchBar () {

        // CREATE MAIN SEARCH BAR DOM
        const that = this
        // input
        const labelMainSearchBar = document.createElement('label')
        labelMainSearchBar.setAttribute('for', 'input_main_search_bar') 

        const inputMainSearchBar = document.createElement('input')
        inputMainSearchBar.setAttribute('type', 'text')
        inputMainSearchBar.setAttribute('id', 'input_main_search_bar')
        inputMainSearchBar.setAttribute('placeholder', 'Recherche une recette')

        const btnSearch = document.createElement('button')
        btnSearch.setAttribute('id', 'btn_search')
        btnSearch.setAttribute('type', 'submit')
        const iconBtnSearch = document.createElement('i')
        iconBtnSearch.setAttribute('class', 'fa fa-search')
        btnSearch.appendChild(iconBtnSearch)
        
        that.$wrapper.appendChild(labelMainSearchBar)
        that.$wrapper.appendChild(inputMainSearchBar)
        that.$wrapper.appendChild(btnSearch)

        this.handleRecipe()

        return that.$wrapper
    }

}



