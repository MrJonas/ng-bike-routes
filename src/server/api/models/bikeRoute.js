import mongoose from 'mongoose'

const Schema = mongoose.Schema
const bikeRoute = new Schema({
    url: {type: String},
    body: {type: String},
    published: {type: Boolean},
    distance: {type: Number},
    atractions: {type: Array}
});

export default mongoose.model('routes', bikeRoute);
