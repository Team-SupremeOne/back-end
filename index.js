//Dependencies
const express = require('express');
const app = express();
const cors = require('cors');



//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Redirect
app.get('/', (req, res) => {
    res.redirect('/artworks')
})


//Controllers
const artworksController = require('./controllers/artworksController.js');
app.use('/artworks', artworksController);



app.listen(6060, () => {
    console.log('HELLO WRLD!')
})