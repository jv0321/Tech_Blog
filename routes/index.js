const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

async function attachUser(req, res, next) {
    const user_id = req.session.user_id
    if (user_id) {
        const user = await User.findByPk(user_id, {
            attributes: ['id', 'username', 'email', 'posts'],
            include: [{
                model: Post,
                as: 'posts'
            }],
        })
        req.user = user.get({ plain: true })
    }
    next()
}

const user_routes = require('./user_routes.js')
router.use('/users', user_routes)

const blog_routes = require('./blog_routes.js')
router.use('/blog', blog_routes)

const views = require('./view_routes.js')
router.use('/', views)

module.exports = router