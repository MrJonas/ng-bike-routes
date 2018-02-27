import express from 'express'
import mongoose from 'mongoose'
import Grid from 'gridfs-stream'

const app = express()
const config = require('./config')
let gfs

Grid.mongo = mongoose.mongo
mongoose.connect(config.uri, {useMongoClient:true})

const conn = mongoose.connection

conn.once('open', () => gfs = Grid(conn.db))

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))

app.get('/:id', function (request, response) {
    var readstream = gfs.createReadStream({
        _id: request.params.id, root: 'uploadfs'
    });
    readstream.on('error', function (err) {
        response.status(404);
        response.send('Image not found: ' + JSON.stringify(err));
    });
    readstream.pipe(response);
});

export default app
