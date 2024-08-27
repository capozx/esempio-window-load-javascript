var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});


var server = http.createServer(function(req, res) {

    console.log('handling request', req?.url);

    let requestDelay = req?.url.includes('functions.js') ? 5000 : 0;

    setTimeout(() => {

        proxy.web(req, res, {
            target: 'http://localhost:5173'
        });

    }, requestDelay);

});

console.log("listening on port 5050")
server.listen(5050);
