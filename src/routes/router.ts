import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Rota principal');
});

router.get('/about', (req, res) => {
  res.send('Sobre nós');
});

export default router;