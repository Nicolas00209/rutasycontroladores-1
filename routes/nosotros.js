var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nosotros', function(req, res, next) {
  res.send("Hola soy la pagina de nosotros")
});

module.exports = router;