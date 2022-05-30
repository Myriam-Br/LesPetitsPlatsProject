class Appareils{
    constructor(){
        this.$wrapper = document.createElement('article')
        this.$wrapper.setAttribute('id', 'appareils_search_bar')    
    }

    
    dropDownSection() {
       // console.log(this.$wrapper.querySelector('#drop_down_appareils'));
        const el = this.$wrapper.querySelector('#drop_down_appareils')
        const section = this.$wrapper.querySelector('#appareils_list')
       // console.log(this.$wrapper.querySelector('i'));
        const icone = this.$wrapper.querySelector('i')
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
        const labelInputAppareils = document.createElement('label')
        labelInputAppareils.setAttribute('for', 'input_appareils')
        const inputAppareils = document.createElement('input')
        inputAppareils.setAttribute('id', 'input_appareils')
        inputAppareils.setAttribute('placeholder', 'Rechercher un appareil')
        inputAppareils.setAttribute('value', 'Appareils')

        //button arrow 
        const btnDropDown = document.createElement('button')
        btnDropDown.setAttribute('class', 'drop_down')
        btnDropDown.setAttribute('id', 'drop_down_appareils')
        const iconBtnDropDown = document.createElement('i')
        iconBtnDropDown.setAttribute('class', 'fa fa-chevron-down')
        btnDropDown.appendChild(iconBtnDropDown)
       

        // ingredients list
        const appareilsSection = document.createElement('ul')
        appareilsSection.setAttribute('id', 'appareils_list')
        appareilsSection.setAttribute('class', 'list')
        appareilsSection.style.display = "none"


        that.$wrapper.appendChild(labelInputAppareils)
        that.$wrapper.appendChild(inputAppareils)
        that.$wrapper.appendChild(btnDropDown)
        that.$wrapper.appendChild(appareilsSection)

        that.dropDownSection()

        return that.$wrapper
    }

}