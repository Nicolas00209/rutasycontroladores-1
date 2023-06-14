var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contactenos', function(req, res, next) {
  res.send("Hola soy la pagina para cpntactarse")
});

module.exports = router;