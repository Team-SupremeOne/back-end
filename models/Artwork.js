const mongoose = require('../db/connection');
const Schema = mongoose.Schema;


const ArtSchema = new Schema({
	name: String,
	image: String,
	description: String,
    artistInfo: String,
    category: String
});

const Art = mongoose.model('Artwork', ArtSchema);

module.exports = Art;