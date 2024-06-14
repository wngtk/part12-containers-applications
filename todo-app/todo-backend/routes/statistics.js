const Router = require('express').Router
const redis = require('../redis')

statisticsRouter = Router()

statisticsRouter.get('/', async(req, res) => {
    let result = await redis.getAsync('added_todos');
    if (!result) {
        result = 0
        await redis.setAsync('added_todos', 0)
    }
    res.json({ "added_todos": result })
})

module.exports = statisticsRouter
