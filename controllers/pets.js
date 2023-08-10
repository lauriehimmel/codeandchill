

module.exports = {
    index,
    newPet,
    create
}

function index(req,res) {
    res.send("here are the pets!")
}

function newPet(req,res) {
    res.render('pets/new', {
        title: 'Pets!!!'
    })
}


async function create(req, res){
console.log('test')

}