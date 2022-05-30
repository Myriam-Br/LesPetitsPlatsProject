class MainSearchBar{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'main_search_bar')
        this.recipes = recipes
        this.$main = document.getElementById('main')
       
    }


    searchRecipe (){
        const that = this
        const inputSearchRecipe = this.$wrapper.querySelector('#input_main_search_bar')
        inputSearchRecipe.addEventListener('keyup', () => {
        
            let recipeList = that.$main.querySelector('#recipe_wrapper').querySelectorAll('div[class=recipe_card]')
            //console.log(that.$main.querySelectorAll('[filter1=active]'));
            for(let i = 0; i < recipeList.length; i++) {
            
                let elt =  recipeList[i].querySelector('.name_recipe')
                 
                if(inputSearchRecipe.value!==' ' && inputSearchRecipe.value.length >= 3) {
                    if(elt.innerHTML.toLowerCase().includes(inputSearchRecipe.value.toLowerCase())) {
                        recipeList[i].style.display='block'      
                        recipeList[i].setAttribute('filter1', 'active')
                    }
                    
                    else {
                        recipeList[i].style.display='none'
                        recipeList[i].removeAttribute('filter1')
                    }
                }
                else {
                   //console.log(inputMainSearchBar.value.length < 3);
                    recipeList[i].style.display='block'
                    recipeList[i].removeAttribute('filter1')
                }
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

        that.searchRecipe()

        return that.$wrapper
    }

}



