const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

let list = [
  {
    id: 1,
    text: 'Hello',
  },
  {
    id: 2,
    text: 'This is Schmiede',
  },
  {
    id: 3,
    text: 'We are in Düsseldorf',
  },
  {
    id: 4,
    text: 'Thats is Germany!',
  },
];

let idCounter = 5;

app.get('/api/list', (req, res) => {
  res.send({ list });
});

app.post('/api/list', (req, res) => {
  const message = req.body.message;
  list.push({ id: idCounter++, message });
  res.send({ list });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
