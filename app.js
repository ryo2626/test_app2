//Express �t���[�����[�N��ǂݍ���
var express = require('express');
var app = express();

// �摜�t�@�C���̓ǂݍ��݂�����
app.use(express.static('views'));

// �r���[�G���W����ejs�ɃZ�b�g����
app.set('view engine', 'ejs');

// index�̃e���v���[�g���Ăяo��
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about�y�[�W�̃e���v���[�g���Ăяo��
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// services�y�[�W�̃e���v���[�g���Ăяo��
app.get('/services', function(req, res) {
  res.render('pages/services');
});

// portfolio�y�[�W�̃e���v���[�g���Ăяo��
app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

// contact�y�[�W�̃e���v���[�g���Ăяo��
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

// �|�[�g8082���I�[�v���ɂ���
app.listen(8082);