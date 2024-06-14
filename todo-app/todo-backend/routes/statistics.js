const Router = require('express').Router
const redis = require('../redis')

statisticsRouter = Router()

redis.setAsync('added_todos', 0)

statisticsRouter.get('/', async(req, res) => {
    const result = await redis.getAsync('added_todos');
    res.json({ "added_todos": result })
})

module.exports = statisticsRouter
