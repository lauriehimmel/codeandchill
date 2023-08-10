const Pet = require("../models/pet")


module.exports = {
    index,
    newPet,
    create,
    show,
    delete: deletePet,
    editPet
}

async function index(req,res) {
    Pet.find({})
    .then(results=>res.render('pets/index', {pets: results}))
    .catch(err=>res.send(err))
}


function newPet(req,res) {
    res.render('pets/new', {
        title: 'NEW Pets!!!'
    })
}


async function create(req, res){
    req.body.interests = req.body.interests.split(/ *, */)
    console.log(req.body.interests)
    const newbie = {...req.body}
   await Pet.create(newbie)
    res.redirect('/pets')
}

async function show(req,res) {
    const pet = await Pet.findById(req.params.id)
    res.render('pets/show', {
        pet
    })
}

async function deletePet(req,res){
    await Pet.deleteOne({_id: req.params.id})
    res.redirect('/pets')
}

async function editPet(req,res) {
    const pet = await Pet.findById(req.params.id)
    res.render('pets/edit', {
        pet
    })
}