require('dotenv').config()
const { Sequelize } = require('sequelize')

const client = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = client