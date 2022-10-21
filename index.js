//Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 6060)



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



app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
