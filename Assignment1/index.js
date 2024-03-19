const http = require('http');
const PORT = 8900;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Ayeni Olajide\n');
  res.end();
});

server.listen(PORT, function () {
  console.log(`Server is runnimg at http://${HOSTNAME}:${PORT}`);
});