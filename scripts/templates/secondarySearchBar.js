class SecondarySearchBar{
    constructor(recipes){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'secondary_search_bar')
        
        this._recipes = recipes
        //console.log(this._recipes);

    }



    createSearchBar(){
        const that = this
      
        const TemplateSearchIngredients = new Ingredients(this._recipes)
        const TemplateSearchAppareils = new Appareils(this._recipes)
        const TemplateSearchUstensiles= new Ustensiles(this._recipes)
        that.$wrapper.appendChild(
             TemplateSearchIngredients.createSearchBar()
        )
        that.$wrapper.appendChild(
            TemplateSearchAppareils.createSearchBar()
        )
        that.$wrapper.appendChild(
            TemplateSearchUstensiles.createSearchBar()
        )

  
        return that.$wrapper
    }
}