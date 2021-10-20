const { Schema, model } = require("mongoose");


const movieSchema = new Schema({
    backdrop: { type: String},
    cast: [{type: String}],
    classification: {type: String},
    director:  {type: String},
    genres: [{type: String}],
    id: {type: String},
    imdb_rating: {type: Number},
    length: {type: String},
    overview: {type: String},
    poster: {type: String},
    released_on: {type: Date},
    slug: {type: String},
    title: {type: String}
}, { timestamps: true })

module.exports = MovieModel = model("movies", movieSchema)