// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connections'); // Use the sequelize instance
// const User = require('./User');

// class Comment extends Model {}

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     comment: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: User,
//         key: 'id'
//       }
//     },
//   },
//   {
//     sequelize, // Use the sequelize instance
//     timestamps: true,
//     modelName: 'comment'
//   }
// );

// module.exports = Comment; // Export the Comment model