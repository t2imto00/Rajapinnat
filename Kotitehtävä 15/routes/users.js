var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('1. GET-metodi');
});

router.get('/2/:parametri',function(request,response)
  {
    response.send('GET-metodi yhdellä parametrilla '+request.params.parametri)
  }
)

router.get('/3/:parametri1/:parametri2',function(request,response)
  {
    response.send('GET-metodi kahdella parametrilla '+request.params.parametri1+' '+request.params.parametri2)
  }
)

router.post('/',function(request,response)
  {
    response.send(request.body.parametri1+' '+request.body.parametri2)
  }
)
module.exports = router;
