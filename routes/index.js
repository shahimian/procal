var express = require('express');
var router = express.Router();
var procal = require('../procal')

/* GET home page. */
router.get('/', function(req, res, next) {
  let rate = 0.2062;
  let p = [
    [10000000, new Date("2020-02-03"), new Date("2021-07-01")],
    [2000000, new Date("2020-02-02"), new Date("2021-07-01")]
  ];
  res.render('procal', { prices: [
      {
          price: p[0][0],
          startDate: p[0][1],
          endDate: p[0][2],
          rate: rate,
          iv: procal.procal(p[0][0], p[0][1], p[0][2], rate)
      },
      {
          price: p[1][0],
          startDate: p[1][1],
          endDate: p[1][2],
          rate: rate,
          iv: procal.procal(p[1][0], p[1][1], p[1][2], rate)
      }
    ]
  });
});

module.exports = router;
