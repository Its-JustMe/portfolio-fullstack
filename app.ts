import express, { Application, json, urlencoded } from 'express';
import path from 'path';
import router from './src/routes/router';

const app: Application = express();
const port: number = 3000;

app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}\nhttp://localhost:${port}`);
});
