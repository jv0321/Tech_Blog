// controllers/index.js
const authController = require('./auth_controller');
const commentController = require('./comment_controller');
const dashController = require('./dashboard_controller');
const viewController = require('./view_controller');

module.exports = {
  authController,
  commentController,
  dashController,
  viewController
};