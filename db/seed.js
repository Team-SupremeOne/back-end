const mongoose = require('./connection');
const seedData = require('./seeds.json')
const Artwork = require('../models/Artwork')


Artwork.deleteMany({})
    .then(() => {
        Artwork.insertMany(seedData).then((art) => {
            console.log('We gave art bitch');
            console.log(art);
            process.exit();
        });
    })
    .catch((err) => console.error(err));