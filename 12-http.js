const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url=== '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oooops sorry we can't find that page</h1>
    <P>We can't find the page oyu are looking for</p>
    <a href = '/'>back home</a>
    `)
})

server.listen(5000)