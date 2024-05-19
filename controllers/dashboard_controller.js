const { Post } = require('../models')
//Methods for Post routes
module.exports = {
  // Save post to database
  async savePostToDb(req, res) {
    const { title, content } = req.body //Grab title and content input
    const user_id = req.session.user_id //Grab session id for associations

    if (!title || !content) { //If no title or content break
      return res.send({ message: 'Title and content are required.' })
    }

    try {
      await Post.create({ title, content, user_id }) //Save post to database

      res.redirect('/dashboard') //Redirect to dashboard

    } catch (err) {
      console.error('Error creating post', err)
    }
  },
  // Update a post
  async updatePost(req, res) {
    const { title, content, postId } = req.body //Grab updated values from DOM

    try {
      await Post.update( //Update post in the database
        { title, content },
        { where: { id: postId } }
      )

      res.redirect('/dashboard') //Redirect back to the dashboard

    } catch (err) {
      console.log(err)
    }
  },
  // Delete post from the database and the DOM
  async deleteRoute(req, res) {
    const { postId } = req.body
    await Post.destroy({ where: { id: postId } })

    res.redirect('/dashboard')
  }

}