const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const { typeError } = require('./middlewares/errors.js');
// const db = require('./config/config')

app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));
app.use('/orders', require('./routes/orders'));
app.use('/genres', require('./routes/genres'));

app.use(typeError);

 
app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));