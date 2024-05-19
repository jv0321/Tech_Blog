const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Middleware to check if user is authenticated
function isAuth(req, res, next) {
    if (!req.session.user_id) {
       // Redirect to login page if user is not authenticated
       return res.redirect('/login');
    }
    // Continue to the next middleware or route handler
    return next();
}

// Home route
router.get('/', async (req, res) => {
    // Check if user is logged in based on session
    const isLoggedIn = !!req.session.user_id;
    const blogData = await Post.findAll({
        // include: [
        //   {
        //     model: User,
        //     attributes: ['username'],
        //   },
        // ],
      });

      
      const posts = blogData.map((project) => project.get({ plain: true }));

      console.log(posts)
      // Prepare user object for rendering the view
    const userObj = {
        isLoggedIn: isLoggedIn,
        posts  // Assuming req.user is correctly set elsewhere
    };

    // Render the 'home' view with userObj
    res.render('home', userObj);
});

// Route to fetch and render all posts
router.get('/posts', async (req, res) => {
    // Fetch all posts from the database
    const posts = await Post.findAll();
    
    // Render the 'posts' view with the fetched posts
    res.render('posts', {
        posts: posts.map(p => p.get({ plain: true }))
    });
});

// Dashboard route
router.get('/dashboard', (req, res) => {
    // Prepare user object for rendering the view
    const userObj = {
        isLoggedIn: !!req.session.user_id,
        user: req.user  // Assuming req.user is correctly set elsewhere
    };
    
    // Render the 'dashboard' view with userObj
    res.render('dashboard', userObj);
});

// Register route
router.get('/register', async (req, res) => {
    // Prepare user object for rendering the view
    const userObj = {
        isLoggedIn: !!req.session.user_id,
        user: req.user  // Assuming req.user is correctly set elsewhere
    };
    
    // Render the 'register' view with userObj
    res.render('register', userObj);
});

// Login route
router.get('/login', async (req, res) => {
    // Prepare user object for rendering the view
    const userObj = {
        isLoggedIn: !!req.session.user_id,
        user: req.user  // Assuming req.user is correctly set elsewhere
    };
    
    // Render the 'login' view with userObj
    res.render('login', userObj);
});

// Logout route
router.get('/logout', async (req, res) => {
    // Prepare user object for rendering the view
    const userObj = {
        isLoggedIn: !!req.session.user_id,
        user: req.user  // Assuming req.user is correctly set elsewhere
    };
    
    // Render the 'logout' view with userObj
    res.render('logout', userObj);
});

// User route (requires authentication)
router.get('/user', isAuth, async (req, res) => {
    // If user is not set, return 404
    if (!req.user) {
        return res.status(404).send("User not found");
    }
    // Fetch user from the database (assuming req.user.id is set)
    const user = await User.findByPk(req.user.id);
    
    // Prepare user object for rendering the view
    const userObj = {
        isLoggedIn: true,
        user: req.user  // Assuming req.user is correctly set elsewhere
    };
    
    // Render the 'dashboard' view with userObj
    res.render('dashboard', userObj);
});

// Export the router
module.exports = router;