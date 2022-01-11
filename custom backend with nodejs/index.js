const http = require('http');
const fs = require('fs');

const process = require('process');
console.log(process.cwd())

// const fileContent = fs.readFileSync("index.html");

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('templates/pages/index.html');
const about = fs.readFileSync('templates/pages/about.html');
const services = fs.readFileSync('templates/pages/services.html');
const contact = fs.readFileSync('templates/pages/contact.html');

const server = http.createServer((request, response) => {
    
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    const url = request.url;
    if (url == '/' || url == '/home')
    {
        response.end(home);
    }
    else if (url == '/about')
    {
        response.end(about);
    }
    else if (url == '/services')
    {
        response.end(services);
    }
    else if (url == '/contact')
    {
        response.end(contact);
    }
    else
    {
        response.statusCode = 404;
        response.end("<h1>404 page not found<h1>");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});