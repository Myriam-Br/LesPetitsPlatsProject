class API {
    constructor (url) {
      this._url = url
    }
  
    // get all recipes
    async get () {
      return fetch(this._url)
        .then(res => res.json())
        .then(function(result) {
           // console.log(result);
            return result
         }) 

        //.then(res => res.recipes) 
        .catch(err => console.log('error', err))
    }

    // get recipe by id
    async getById () {
        return fetch(this._url)
        .then(res => res.json())
        .then(res => {
            for(let i = 0; i < res.recipes.length; i++) {
                res.recipes[i]
                //console.log('RECIPES', res.recipes[i]);
                //console.log('INGREDIENTS:',res.recipes[i].ingredients);
                for(let j = 0; j < res.recipes[i].ingredients.length; j++){
                    console.log(res.recipes[i].ingredients[j].ingredient);
                    console.log(res.recipes[i].ingredients[j].ingredient.length);
                    if(res.recipes[i].ingredients[j].ingredient == res.recipes[i].ingredients[j].ingredient){
                        //console.log('true', res.recipes[i].ingredients[j].ingredient);
                    }
                }
                //console.log(res.recipes[i].name);
            }
        })
        .catch(err => console.log('error', err))
    }

    
}



class RecipesListApi extends API{
    constructor(url) {
        super(url)
    }

    async getRecipes (){
        const promise = await this.get()
        //console.log(promise);
        return promise       
    }
}