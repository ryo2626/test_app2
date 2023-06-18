//Express フレームワークを読み込む
var express = require('express');
var app = express();

// 画像ファイルの読み込みを許可
app.use(express.static('views'));

// ビューエンジンをejsにセットする
app.set('view engine', 'ejs');

// indexのテンプレートを呼び出す
app.get('/', function(req, res) {
  res.render('pages/index');
});

// aboutページのテンプレートを呼び出す
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// servicesページのテンプレートを呼び出す
app.get('/services', function(req, res) {
  res.render('pages/services');
});

// portfolioページのテンプレートを呼び出す
app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

// contactページのテンプレートを呼び出す
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

// ポート8082をオープンにする
app.listen(8082);