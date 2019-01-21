var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});


router.get('/shopcar',(req,res)=>{
  res.render('shopcar',{})
})

router.get('/xiangqing',(req,res)=>{
  res.render('xiangqing',{})
})





module.exports = router;
