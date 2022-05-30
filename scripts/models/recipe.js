class Recipe {
    constructor (recipe) {
      
        this._id = recipe.id
        this._name = recipe.name
        this._ingredients = [recipe.ingredients]
        this._time = recipe.time
        this._description = recipe.description
        this._appliance = recipe.appliance
        this._ustensils = recipe.ustensils
      }
    
      get id () {
        return this._id
      }
    
      get name () {
        return this._name
      }
    
      get ingredients () {
        return this._ingredients
      }
    
      get time () {
        return this._time
      }
    
      get description () {
        return this._description
      }
    
      get appliance () {
        return this._appliance
      }
    
      get ustensils () {
        return this._ustensils
      }
    }