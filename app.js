/*
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta principal con comparación de método y URL
app.use((req, res, next) => {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      mensaje: 'API Aventuras San Gil funcionando'
    }));
  } else {
    next();
  }
});

// Ruta GET con res.json()
app.get('/aventuras', (req, res) => {
  res.json({
    mensaje: 'Lista de aventuras',
    aventuras: ['Rafting', 'Senderismo', 'Espeleología']
  });
});

// Ruta POST para recibir datos
app.post('/aventuras', (req, res) => {
  res.status(201).json({
    mensaje: 'Aventura recibida correctamente',
    datos: req.body
  });
});

// Ruta que no existe: error 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
*/
import express from "express"

const app=   express()
app.use((req, res, next) => {
console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
next();
});

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.get("/actividad",(req,res)=>{
    res.json({mensaje:"holis"})
})

app.post("/actividad",(req,res)=>{
    res.send("Esto es un post llamado actividad")
})


app.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto http://localhost:3000');
})
