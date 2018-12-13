var express = require('express');
var router = express.Router();
var fs = require('fs');
var resDir = __dirname + '/../public/resources';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET articles page. */
router.get('/articles', function(req, res, next) {
  res.render('articles');
});

/* GET music page. */
router.get('/music', function(req, res, next) {
  var dir = resDir + '/mp3';
  var mp3Names = new Array();
  // get number of mp3 files
  fs.readdirSync(dir).forEach(file => {
    mp3Names.push(file);
  })
  res.render('music', {mp3Names: mp3Names});
});

module.exports = router;
