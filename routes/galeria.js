var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/galeria', function(req, res, next) {
  res.send("Hola soy la pagina de galeria")
});

module.exports = router;