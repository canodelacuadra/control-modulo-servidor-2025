import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = 3000;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.get('/peliculas', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('videoclub');
    const collection = db.collection('peliculas');
    const peliculas = await collection.find().toArray();
    res.json(peliculas);
  } catch (err) {
    res.status(500).json({ error: 'Error al conectar a MongoDB' });
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
