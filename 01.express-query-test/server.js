import express from 'express';
const app = express();
const PORT = 3000;

// Ruta: http://localhost:3000/suma?a=4&b=5
app.get('/suma', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const resultado = a + b;
  res.send(`La suma es: ${resultado}`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
