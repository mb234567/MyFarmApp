import * as bootstrap from 'bootstrap'

Template.LP.helpers({
    profile() {
        return farmdb.find()
    }
})

Template.LP.events({
    'click .js-view'() {  
        console.log("viewing")
        let that = this
        const viewModal = new bootstrap.Modal('#VModal', {})
        console.warn("viewing", that)
        document.querySelector('#viewProfile').src = that.profilep
        document.querySelector('#viewName').innerHTML = `${that.animal}`
        document.querySelector('#viewSpecies').innerHTML = `${that.species}`
        viewModal.show()
    }
})