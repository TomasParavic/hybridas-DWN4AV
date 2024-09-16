

import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Parte 1: Rutas básicas
app.get('/', (req, res) => {
    res.send('Nombre: Tomás Paravic');
});

app.get('/materia', (req, res) => {
    res.send('Materia: Aplicaciones Hybridas');
});

app.get('/profesor', (req, res) => {
    res.send('Profesor: Camila Galban');
});

app.use((req, res) => {
    res.status(404).send('404  Página no encontrada');
});

// Parte 2: Películas
const peliculasFavoritas = ['Shrek 2', 'White Chicks', 'The Nightmare Before Christmas', 'Deadpool', 'Split'];

app.get('/peliculas/:nombre', (req, res) => {
    const { nombre } = req.params;
    const peliculaEncontrada = peliculasFavoritas.find(pelicula => pelicula.toLowerCase() === nombre.toLowerCase());

    if (peliculaEncontrada) {
        res.send('La película seleccionada ya está en favoritos');
    } else {
        res.status(404).send('404 Película no encontrada');
    }
});

// Parte 3: Productos
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 24000 },
    { id: 2, nombre: 'Producto 2', precio: 25000 },
    { id: 3, nombre: 'Producto 3', precio: 21000 },
    { id: 4, nombre: 'Producto 4', precio: 13000 },
    { id: 5, nombre: 'Producto 5', precio: 30000 },
    { id: 6, nombre: 'Producto 6', precio: 900 },
    { id: 7, nombre: 'Producto 7', precio: 5500 },
    { id: 8, nombre: 'Producto 8', precio: 12000 },
    { id: 9, nombre: 'Producto 9', precio: 11599 },
    { id: 10, nombre: 'Producto 10', precio: 10000 }
];

app.get('/productos', (req, res) => {
    const { id, min, max } = req.query;

    if (id) {
        
        const producto = productos.find(p => p.id === parseInt(id));
        if (producto) {
            return res.send(producto);
        }
        return res.status(404).send('Producto no encontrado');
    }

    // Filtrar productos por rango de precio (min y/o max)
    let productosFiltrados = productos;

    if (min) {
        productosFiltrados = productosFiltrados.filter(p => p.precio >= parseInt(min));
    }

    if (max) {
        productosFiltrados = productosFiltrados.filter(p => p.precio <= parseInt(max));
    }

    res.send(productosFiltrados);
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
