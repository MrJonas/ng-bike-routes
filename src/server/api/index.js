import express from "express"
import bodyParser from 'body-parser'


import bikeRoutesAPI from './bike.routes.api'
import imageApi from './images.api'

const api = express()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}))

//TODO delete after tests
import {NEWS_LIST} from "./../mock.data/news.list"
let news = NEWS_LIST;

api.get("/news", (req, res) => {
    res.json(news)
})

api.post("/news", (req, res) => {
    if(req.body.text) {
        news.push({title: req.body.text, id: Math.random(), upvotes: 15, author: 'Jonas'})
    }
    res.json(news)
})
///////////

api.use('/route/', bikeRoutesAPI)
api.use('/images/', imageApi)

export default api;

