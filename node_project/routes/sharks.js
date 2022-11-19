const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function(req, res){
    shark.index(req,res);
});

router.post('/addshark', function(req, res) {
    shark.create(req,res);
});

router.get('/delete/:id', function(req, res) {
    //console.log("estoy aca")
    shark.delete(req,res);
});

router.get('/getshark', function(req, res) {
    shark.list(req,res);
});

router.get('/getSharkUpdate/:id', function(req, res) {
    shark.getOne(req,res);
});

router.post('/updateshark/:id', function(req, res) {
    shark.update(req,res);
});

module.exports = router;
