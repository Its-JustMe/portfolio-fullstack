const express = require('express');
const path = require('path');
const router = require('./src/routes/router');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}\nhttp://localhost:${port}`);
});
