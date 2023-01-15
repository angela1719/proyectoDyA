//6. crear controlador por cada vista, no olvidar exportar al final del codigo
const controlador = {
    home: (req, res) =>{
        res.send('Bienvenidos al home!!!!!!');
    },
};


module.exports = controlador

//7. crear carpeta routes en la raiz del proyecto, para implementar los metodos del controlador yrequerir el modulo controlador....