let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')

//App configuration
let app = express()

//body parser converts data sent in a request to JSON
app.use(bodyParser.json()) 

app.use('/api', api_routes)

//start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})