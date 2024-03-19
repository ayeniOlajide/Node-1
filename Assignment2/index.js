const http = require("http");
const PORT = 8000;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.writeHead("Home");
    res.end();
  }

  else if(req.method === "GET" && req.url === "/books") {
    res.write("hello from GET/books");
    res.end();
  }

  else if(req.method === "PUT" && req.url === "/books") {
    res.write("hello from PUT/books");
    res.end();
  }

  else if(req.method === "DELETE" && req.url === "/books") {
    res.write("hello from DELETE/books");
    res.end();
  }

  else if(req.method === "GET" && req.url === "/books") {
    res.write("hello from GET/books");
    res.end();
  }


  else if(req.method === "POST" && req.url === "/books") {
    res.write("hello from POST/books");
    res.end();
  }

  else if(req.method === "PUT" && req.url === "/books") {
    res.write("hello from PUT/books");
    res.end();
  }

  else{
    res.write("404 page not found");
    res.end();
  }

});

server.listen(PORT, function () {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});