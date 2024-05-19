require('dotenv').config()

const express = require('express')
const path = require('path');
const client = require('./db/client')
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const exphbs  = require('express-handlebars')
const { User, Post } = require('./models')
const hbs = exphbs.create()


// Pull in your routes
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3333

console.log("Views directory path:", path.join(__dirname, 'views'));


// Set up the express sessions
const store = new SequelizeStore({ db: client })
app.use(session({
    secret: 'some secret',
    store,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Change to false if not using HTTPS
}))

// Parse incoming requests with JSON payloads
app.use(express.json())

// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: false }))

// Serve static files in public directory
app.use(express.static('public'))

// Set up handlebars template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// Use routes
app.use('/', routes)

// Sync the database and start the server
client.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server running on port:', PORT)
        })
    })