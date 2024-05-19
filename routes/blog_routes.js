const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

function isAuth(req, res, next) {
    if(!req.session.user_id) {
        res.redirect('./login')
    }

    return next()
}

//Create Post
router.post('/', isAuth, async (req, res) => {
    try {
        const userId = req.session.user_id
        if(!req.session.user_id) {
            return res.status(403).send('User must be logged in to post')
        }
        console.log('logged in user', userId);

        const newPost = await Post.create({
            title: req.body.title,
            text: req.body.text,
            user_id: userId
        })
        console.log(newPost);
        res.redirect('/home')
    } catch (error) {
        console.error('Error in POST /home:', error)
        if (!res.headersSent) {
            res.status(500).send('Error processing request')
        }
    }
})

module.exports = router