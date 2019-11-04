var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('product-details', { title: 'Express' });
});

module.exports = router;
