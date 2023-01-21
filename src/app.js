//1.luego de instalar los npm (node,express y nodemon) y ajustar en el archivo .json start: y main, levantamos servidor con las siguientes lineas(2 y 3)
const express = require('express');
const app = express();
//11.requerir path
const path = require("path");
//7.requerimos modulo router NOTA: ver archivo productControllers.js
const router = require("./routes/productos")

//2.esta linea se pone para que las imagenes puedan verse
app.use(express.static('public'));
//12. poner la siguiente linea de codigo y poder visualizar pagina.NOTA:despues crear carpeta partial y todos los archivos partials en este caso solo head,header y footer.....luego en el home adjunto la parte de codigo de cada partial (<%- include('./partial/head')%>)
app.set("views", path.join(__dirname, "views"));
//10.para utilizar ejs, instalar npm i ejs y luego agregar esta linea de codigo:
app.set('view engine', 'ejs');

//3.con esta linea se levanta el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//4.luego de crear el archivo html(home.html), creamos la ruta para visualizar la pagina NOTA:app.get pasa a la carpeta de rutas como router.get, mas adelante
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/home.html')
//     });

//5.despues de hacer la ruta del paso 4. en la terminal pongo npm start para que se actualice el codigo

//6.crear carpeta controllers, routes y sus respectivos archivos js NOTA: ir a controllers/productControllers.js y routes/productos.js - NOTA: ver archivo productControllers.js

//8.en app.js requerir modulo router y aplicar app.use("/", router)
app.use("/", router);
app.use("/product", router);
app.use("/register", router);

//9.hacer encarpetado,crear carpeta src y mover ahi lo siguiente:views,app.js,controllers, routs NOTA:no olvidar hacer cambio en package json poniendo las nuevas rutas "start": "nodemon ./src/app.js" y modificar las rutas si es necesario en app.js y router y por ultimo y muy importante volver a instalar las NPM para visualizar proyecto poniendo npm i o npm install.

//13. Creamos carpeta database con  objeto json dentro de la carpeta src 
