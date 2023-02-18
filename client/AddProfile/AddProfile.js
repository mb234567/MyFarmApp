import * as bootstrap from 'bootstrap'

Template.AP.events({
    'click .js-addModal'() {
        const addModal = new bootstrap.Modal('#AModal', {})
        document.querySelector("#AModal").addEventListener('hidden.bs.modal', event => {
            console.log("closing")
        })

        addModal.show()
    },
    'click .js-save'() {
        const addModal = bootstrap.Modal.getInstance('#AModal')
        let image = document.querySelector("#image").value
        let Aname = document.querySelector("#name").value
        let Stype = document.querySelector("#species").value
        farmdb.insert({
            "animal": Aname,
            "species": Stype,
            "profilep": image
        })
        addModal.hide()
    },
    'input #image'() {
        const image = document.querySelector('#image')
        const imgProfile = document.querySelector('#PImage')
        imgProfile.src = image.value
    }
})