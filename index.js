const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/category.json')

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/news-category', (req, res) =>{
    res.send(category)
})

app.listen(port, () => {
  console.log('news site port', port);
})
