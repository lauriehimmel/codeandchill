const Pet = require("../models/pet")


module.exports = {
    index,
    newPet,
    create,
    show,
    delete: deletePet,
    editPet,
    update,
    newToy,
    addToy
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

async function update(req,res) {
    req.body.interests = req.body.interests.split(/ *, */)
    const updatedPet = {...req.body}
    const newPet = await Pet.findOneAndUpdate({_id: req.params.id}, updatedPet)
    await newPet.save()
    res.redirect(`/pets/${req.params.id}`)
}

async function newToy(req, res){
pets = await Pet.find({})
res.render('toys/new', {pets})
}


async function addToy(req, res){
const pet = await Pet.findOne({name: req.body.pet})
const newToy = {...req.body}
pet.toys.push(newToy)
await pet.save()
res.redirect(`/pets/${pet._id}`)
}