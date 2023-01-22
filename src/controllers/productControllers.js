const path = require('path')
const fs = require('fs');
const productsJSON = path.join(__dirname,'../dataBase/product.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
//6. crear controlador por cada vista, no olvidar exportar al final del codigo 
const controlador = {
    home: (req, res) =>{
        res.render('home');
    },//8.NOTA: por cada metodo (home, product,etc) añadir ruta en  routes y app.use en app con la ruta
    detalle: (req, res) => {
        let mascota = products.find(row => row.id == req.params.id)
        res.render("detalle", { mascota: mascota })
        
    },
    
    register: (req, res) =>{  
        res.render('register');
    }

};


module.exports = controlador

//7. crear carpeta routes en la raiz del proyecto, para implementar los metodos del controlador y requerir el modulo controlador....ver products.js y app.js