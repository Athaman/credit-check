const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const validator = require('./controllers/validator');
const app = express();
const port = process.env.port || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.send(__dirname + '/public/index.html');
});

app.post('/validate/', (request, response) => {
  if(validator(request.body.card_number)){
    response.sendFile(__dirname + '/public/success.html');
  } else {
    response.sendFile(__dirname + '/public/failure.html');
  }
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened ' + err);
  }

  console.log(`server is listening on ${port}`);
})
