//7.crear las variables y no olvidar exportar modulo y  en app.js requerir modulo router y aplicar app.use("/", router)......continua en app.js
const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productControllers");

router.get("/", productosController.home);
router.get("/detalle/:id", productosController.detalle);
router.get("/register", productosController.register);

module.exports = router;
