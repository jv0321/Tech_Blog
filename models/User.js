const { Model, DataTypes } = require('sequelize');
const client = require('../db/client')
const { hash, compare } = require('bcrypt')

class User extends Model {
  // Use bcrypt to compare and validate input password to encrypted password
  async validatePassword(formPassword) {
    const is_valid = await compare(formPassword, this.password)
    return is_valid
  }
}

// Define columns for User table
User.init(
  {
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
              args: true,
              message: "user with this already exists"
          },
          validate: {
              isEmail: true
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: 6
          }
      }
  },
  {
      sequelize: client,
      modelName: "user",
      hooks: {
        async beforeCreate(user) {
          user.password = await hash(user.password, 10);
        },
      },
      scopes: {
        withoutPassword: {
          attributes: { exclude: ["password"] },
        },
      },
    }
)


module.exports = User