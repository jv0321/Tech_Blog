const { User } = require('../models')
// Controller methods for aith routes
module.exports = {
  async registerUser(req, res) { //For register route
    try {
      const data = req.body
      const user = await User.create(data)

      req.session.user_id = user.id
      res.redirect('/dashboard')
    } catch (err) {
      console.log(err)
    }
  },

  async loginUser(req, res) { //For login route
    const { username, password } = req.body //Grab user login from dom
    const user = await User.findOne({ //Find the user with the input username
      where: {
        username: username
      }
    })

    if (!user) return res.redirect('/register') // If no user exists redirect to register

    const validate_pass = await user.validatePassword(password) //Validate password

    if (!validate_pass) return res.redirect('/login/Invalid Password')

    req.session.user_id = user.id //Start a session
    res.redirect('/')
  }
}