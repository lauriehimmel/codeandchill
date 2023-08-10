

module.exports = {
    index,
    newPet
}

function index(req,res) {
    res.send("here are the pets!")
}

function newPet(req,res) {
    res.render('pets/new', {
        title: 'Pets!!!'
    })
}