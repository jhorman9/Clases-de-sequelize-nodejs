import express from 'express';
import morgan from 'morgan';
import os from 'os';
import db from './database/database.js';
import User from './models/users.model.js';
User

process.loadEnvFile();
const PORT = process.env.PORT ?? 3000;
const HOST = os.networkInterfaces();
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

db.authenticate()
.then(() => console.log('Conexión establecida correctamente.'))
.catch((error) => console.error('Error al conectar a la base de datos: ', error));

db.sync()
  .then(() => console.log('Base de datos sincronizada correctamente.'))
  .catch((error) => console.error('Error al sincronizar la base de datos: ', error));

app.get('/', (req, res) => {
  res.json({ message: "It's ok" });
});

app.get('/', (req, res) => {
  res.json({ message: "It's ok" });
});

app.listen(PORT, () => {
    const { address } = HOST['Loopback Pseudo-Interface 1'][1];
    console.log(`Escuchando en el servidor http://${address}:${PORT}`);
});