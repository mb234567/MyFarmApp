import * as bootstrap from 'bootstrap' 

Template.Nav.events({
    'click .js-add'() {
        const addModal = new bootstrap.Modal('#AModal', {}) 
        addModal.show() 
    }, 
    'click .js-theme1'() {
        document.body.style.backgroundColor = "lightgreen"
    }, 
    'click .js-theme2'() {
        document.body.style.backgroundColor = "lightgrey"
    }, 
    'click .js-theme3'() {
        document.body.style.backgroundColor = "white"
    }
})