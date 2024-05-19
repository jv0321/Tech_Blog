// const { User, Post, Comment } = require('../models')

// module.exports = {
  
//   // Controller function for rendering the landing page
//   async landingView(req, res) {
//     try {
//       // Retrieve all posts with associated users and comments
//       const allPosts = await Post.findAll({ 
//         include: [
//           { model: User }, 
//           {
//             model: Comment,
//             include: User
//           }
//         ]
//       })

//       // Convert Sequelize instances to plain objects for easier manipulation
//       const allPostsObj = allPosts.map(obj => obj.get({ plain: true })) 

//       // Check if user is authenticated
//       const user = req.session.user_id 

//       // If user is not authenticated, render landing page with login/register links
//       if (!user) {
//         return res.render('landing', { 
//           title: 'Home',
//           posts: allPostsObj,
//           href1: '/',
//           link2: 'Login',
//           href2: '/login',
//           link3: 'Register',
//           href3: '/register',
//           link4: 'Dashboard',
//           href4: '/dashboard'
//         })
//       }

//       // If user is authenticated, render landing page with logout/dashboard links
//       return res.render('landing', { 
//         user: user,
//         posts: allPostsObj,
//         href1: '/',
//         link2: 'Logout',
//         href2: '/logout',
//         link3: 'Dashboard',
//         href3: '/dashboard'
//       })
      
//     } catch (err) {
//       // Handle any errors that occur during database queries or rendering
//       console.log(err)
//     }
//   },

//   // Controller function for rendering the dashboard page
//   async dashboardView(req, res) {
//     try {
//       const user_id = req.session.user_id;

//       const user = await User.findByPk(user_id, {
//         include: [
//           {
//             model: Post,
//             include: [Comment, User],
//           },
//         ],
//       });

//       const userObj = user.get({ plain: true });

//       res.render('dashboard', {
//         user: userObj,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };