const { Comment } = require('../models')
// Method that saves comment to database
module.exports = {
  async saveCommentToDb(req, res) {
    try {
      const {comment, postId} = req.body // Grab user input from the DOM
      const user = req.session.user_id // Grab user session id
  
      await Comment.create({ // Save comment data to the database
        comment: comment, 
        user_id: user,
        postId: postId
      })
  
      res.redirect('/') // Send the user back to the landing page
    } catch (err) {
      console.log(err)
    }
  }
}