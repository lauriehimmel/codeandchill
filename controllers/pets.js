const Pet = require("../models/pet")


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
        title: 'NEW Pets!!!'
    })
}


async function create(req, res){
    console.log('ba;;s')
    const newbie = {...req.body}
   await Pet.create(newbie)
    res.redirect('/pets')
}