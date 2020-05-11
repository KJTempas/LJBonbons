let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

//App configuration
let app = express()

app.use(express.static(path.join(__dirname, 'LJBonbons', 'dist')))



//body parser converts data sent in a request to JSON
app.use(bodyParser.json()) 

app.use('/api', api_routes)

//error habndlers
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})


//start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})