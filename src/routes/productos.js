//7.crear las variables y no olvidar exportar modulo y  en app.js requerir modulo router y aplicar app.use("/", router)......
const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productControllers");

router.get("/", productosController.home);

module.exports = router;
