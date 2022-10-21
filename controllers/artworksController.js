const express = require('express')
const router = express.Router(); 
const Artwork = require ('../models/Artwork'); 



router.get('/', (req, res, next) => { 
    Artwork.find({}) 
    .then((artworks) => res.json 
    (artworks)) 
    .catch(next);
});




router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	Artwork.findById(id)
		.then((artwork) => res.json(artwork))
		.catch(next);
}); 

router.post('/', (req, res, next) => {
   const artworkData = req.body;
	Artwork.create(artworkData)
		.then((artwork) => res.status(201).json(artwork))
		.catch(next);
}); 
 
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
	const artworkData = req.body;
	Artwork.findOneAndUpdate({ _id: id }, artworkData, { new: true })
		.then((art) => res.json(art))
		.catch(next);
}); 

router.delete('/:id', (req, res, next) => { 
    const id = req.params.id; 
    Artwork.findOneAndDelete({_id: id}) 
    .then(() => res.sendStatus(204)) 
    .catch(next)
}); 
 
module.exports = router;