const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')



router.get('/', async (req, res) => {
    try{
        const users = await User.scope('withoutPassword').findAll({
            include: {model: Post},
        })
        return res.json(users)
    }
    catch (err) {
        console.log(err)
    }
})


router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        const user = await User.scope('withoutPassword').findByPk(id,
            {
                include: { model: Post },
            })
        return res.json(user)

    }
    catch (err) {
        console.log(err)
    }
})



router.post('/', async (req, res) => {
    try {
        let newUser = req.body

        const user = await User.create(newUser)
        req.session.user_id = user.id
        console.log('user logged in', user)
        return res.redirect('/dashboard')

    } catch (err) {
        console.log(err)
    }
})



router.post('/login', async (req, res) => {
    try {

        let input = req.body
        console.log('Received login request for username:', input.username);
        const user = await User.findOne({
            where: {
                username: input.username,
            }
        });
        console.log('User found:', user)
        if (user) {
            console.log('Theres a user: ' + user.username)
            const is_valid = await user.validatePassword(input.password);
            console.log('Password valid:', is_valid);
            if (is_valid) {
                console.log('youre logged in ' + user.username)
            }
           
        }
        
        req.session.user_id = user.id; // Set user session
            console.log('You are logged in:', user.username);
             res.redirect('/dashboard');

    } catch (err) {
       console.log(err)
    }
})

router.get('/logout', async (req, res) => {
    try {
        req.session.destroy()
        return res.redirect('/logout')
    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router;