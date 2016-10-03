var finalhandler = require('finalhandler'),
    http = require('http'),
    serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('../public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
console.log('Server started on http://localhost:%s', 5000)
server.listen(5000)
