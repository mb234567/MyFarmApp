import * as bootstrap from 'bootstrap' 


Template.EA.events({
    'click .js-editanimal'() { 
        let eID = document.querySelector("#editID").value 
        let aname = document.querySelector("#name").value
        let Species = document.querySelector("#species").value 
        farmdb.update(
            { _id: eID },
            {
                $set: {
                    "animal": aname,
                    "species": Species
                }
            }
        ) 
        $("#EAModal").modal("hide")
    }
})