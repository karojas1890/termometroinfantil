const express = require('express');
const app = express();
const path = require('path');


// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para la página de Enojo
app.get('/enojo', (req, res) => {
  res.render('enojo', { mensaje: null }); // Inicialmente no hay mensaje
});

// Ruta para procesar el formulario de Enojo
app.post('/enojo', (req, res) => {
  const selecciones = req.body ? Object.keys(req.body).length : 0; // Contar las selecciones
  let mensaje = '';

  if (selecciones >= 6) {
    mensaje = 'Estás muy enojado';
  } else if (selecciones >= 3 && selecciones <= 5) {
    mensaje = 'Tu enojo está creciendo';
  } else if (selecciones <= 2) {
    mensaje = 'Aún puedes controlar tu enojo';
  }

  res.render('enojo', { mensaje }); // Enviar el mensaje a la vista
});

// Ruta para la Rueda de la Calma
app.get('/rueda-calma', (req, res) => {
  res.render('rueda-calma');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Usa el puerto de Render o 3000 como respaldo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});