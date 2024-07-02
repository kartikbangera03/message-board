var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard' , messages:messages });
});


router.get('/new', function(req,res,next){
  console.log("Looking for form");
  res.render("form",{ title: 'Mini MessageBoard'});
});

router.post('/new', function(req,res,next){
  // console.log(req.body.userMessage)
  messages.push({
    text:req.body.userMessage,
    user:req.body.userName,
    added:new Date()
  });
  res.redirect('/')
})


module.exports = router;
