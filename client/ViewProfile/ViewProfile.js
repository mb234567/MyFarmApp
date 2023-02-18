import * as bootstrap from 'bootstrap'

Template.VP.events({
    'click .js-del'() {  
      const VModal2 = new bootstrap.Modal('#VModal', {}) 
      let that = this 
      console.debug("deleting", that._id)
      farmdb.remove({ "_id": that._id })
      VModal2.hide()
     
    }, 
    'click .js-edit'() {
      const EditModal = new bootstrap.Modal('#EAModal', {})  
      const VModal3 = new bootstrap.Modal('#VModal', {})   
      VModal3.hide() 
      EditModal.show() 
      // $("#VModal").modal("hide")
      // $("#EAModal").modal("show")
      console.log("editing")
     
  }
})