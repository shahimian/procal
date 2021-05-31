var express = require('express');
var router = express.Router();
var procal = require('./procal')

let p = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { prices: p });
});

router.post('/', function(req, res){
  p.push({
    price: req.body.price,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    rate: req.body.rate,
    iv: procal.procal(req.body.price, req.body.startDate, req.body.endDate, req.body.rate)
  });
})

module.exports = router;
