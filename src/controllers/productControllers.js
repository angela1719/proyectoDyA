//6. crear controlador por cada vista, no olvidar exportar al final del codigo 
const controlador = {
    home: (req, res) =>{
        res.render('home');
    },
    product: (req, res) =>{  //8.NOTA: por cada metodo (home, product,etc) añadir ruta en  routes y app.use en app con la ruta
        res.render('product');
    },
    register: (req, res) =>{  
        res.render('register');
    }

};


module.exports = controlador

//7. crear carpeta routes en la raiz del proyecto, para implementar los metodos del controlador y requerir el modulo controlador....ver products.js y app.js