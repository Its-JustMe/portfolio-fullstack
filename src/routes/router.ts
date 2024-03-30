import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render(
    'pages/index', 
    {
      erros: null,
      dados: null
    }
  );
});


export default router;