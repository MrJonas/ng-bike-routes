import mongoose from 'mongoose'

const Schema = mongoose.Schema
const images = new Schema({
    _id: {type: String}
})

export default mongoose.model('uploadfs', images)