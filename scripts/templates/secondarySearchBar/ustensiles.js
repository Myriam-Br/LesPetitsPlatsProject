class Ustensiles{
    constructor(){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'ustensiles_search_bar')    
    }

    dropDownSection() {
       // console.log(this.$wrapper.querySelector('#drop_down_ustensiles'));
        const el = this.$wrapper.querySelector('#drop_down_ustensiles')
        const section = this.$wrapper.querySelector('#ustensiles_list')
        const icone = this.$wrapper.querySelector('i')
        //console.log(this.$wrapper.querySelector('i'));
        el.addEventListener('click', () => {
            console.log(section.style);      
            console.log(section.getAttribute('opened'));
            if(section.getAttribute('opened')){
                section.style.display='none'
                section.removeAttribute('opened')    
                icone.removeAttribute('fa fa-chevron-up')
                icone.setAttribute('class','fa fa-chevron-down')        
            } else {
                section.style.display='block'
                section.setAttribute('opened', 'true')
                icone.removeAttribute('fa fa-chevron-down')
                icone.setAttribute('class','fa fa-chevron-up')
               
            }     
        })
    }

    createSearchBar (){
        const that = this

        // CREATE INGREDIENTS SEARCH BAR DOM

        // input
        const labelInputUstensiles = document.createElement('label')
        labelInputUstensiles.setAttribute('for', 'input_ustensiles')
        const inputUstensiles = document.createElement('input')
        inputUstensiles.setAttribute('id', 'input_ustensiles')
        inputUstensiles.setAttribute('placeholder', 'Rechercher un ustensile')
        inputUstensiles.setAttribute('value', 'Ustensiles')

        //button arrow 
        const btnDropDown = document.createElement('button')
        btnDropDown.setAttribute('class', 'drop_down')
        btnDropDown.setAttribute('id', 'drop_down_ustensiles')
        const iconBtnDropDown = document.createElement('i')
        iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down')
        btnDropDown.appendChild(iconBtnDropDown)
        inputUstensiles.appendChild(btnDropDown)

        // ingredients list
        const ustensilesSection = document.createElement('ul')
        ustensilesSection.setAttribute('id', 'ustensiles_list')
        ustensilesSection.setAttribute('class', 'list')
        ustensilesSection.style.display = "none"


        that.$wrapper.appendChild(labelInputUstensiles)
        that.$wrapper.appendChild(inputUstensiles)
        that.$wrapper.appendChild(btnDropDown)
        that.$wrapper.appendChild(ustensilesSection)

        that.dropDownSection()

        return that.$wrapper
    }

}