const { Model, DataTypes } = require('sequelize');
const client = require('../db/client')

class Post extends Model {}

Post.init(
  {
  id: { 
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      }, 
  title: { 
      type: DataTypes.STRING,
      allowNull: false
  }, 
  text: { 
      type: DataTypes.STRING,
      allowNull: false
  }, 
  user_id: { 
      type: DataTypes.INTEGER,
      references: { 
          model: 'users',
          key: 'id',
      }, 
  } 
  }, 
  { 
   sequelize: client,
   modelName: 'post',
   indexes: [ 
      { 
          fields: ['user_id']
      } 
   ] 
  } 
)

module.exports = Post

  