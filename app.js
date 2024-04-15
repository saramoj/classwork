const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// GET method routes
app.get('/a', (req, res) => {
    res.send('Response from /a');
  });
  
  app.get('/b', (req, res) => {
    res.send('Response from /b');
  });
  
  app.get(['/c', '/d'], (req, res) => {
    res.send('Response from /c and /d');
  });
  
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request received');
  });
  
  // PUT method route
  app.put('/', (req, res) => {
    res.send('PUT request received');
  });
  
  // DELETE method route
  app.delete('/', (req, res) => {
    res.send('DELETE request received');
  });
  
  // PATCH method route
  app.patch('/', (req, res) => {
    res.send('PATCH request received');
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get('/query', (req, res) => {
    console.log(req.query);  // Log query string to console
    res.send(`Received query string: ${JSON.stringify(req.query)}`);
  });
  app.post('/data', (req, res) => {
    console.log(req.body);  // Log POST data to console
    res.send(`Received POST data: ${JSON.stringify(req.body)}`);
  });
  