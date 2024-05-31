import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes';

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/api',router);
app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});