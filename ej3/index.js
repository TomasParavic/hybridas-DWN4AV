import express from "express";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
res.send("Hola, esto funciona :)");
});

// para /alumno
app.get("/alumno", (req, res) => {
const alumno = {
    nombre: "Tomás",
    comision: "Comisión DWN4AV",
};
res.send(`Nombre: ${alumno.nombre}, Comisión: ${alumno.comision}`);
});

// para /info
app.get("/info", (req, res) => {
const info = {
    plataforma: os.platform(),
    arquitectura: os.arch(),
    memoriaLibre: os.freemem(),
    tiempoActivo: os.uptime(),
};
res.send(info);
});

// para /static 
app.get("/static", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"));
});

// iniciar el servidor en el peurto 3000
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
