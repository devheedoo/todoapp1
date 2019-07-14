const express = require('express');
const fs = require('fs');
const connect = require('./schemas');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const app = express();
connect();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(3000, () => {
  console.log('Express server has started on port 3000');
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const router = require('./router/main')(app);