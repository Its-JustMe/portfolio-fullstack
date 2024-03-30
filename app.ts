import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Express with EJS' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});