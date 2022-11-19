const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
        res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
        var newShark = new Shark(req.body);
        console.log(req.body);
        newShark.save(function (err) {
                if (err) {
                        res.status(400).send('Unable to save shark to database');
                } else {
                        res.redirect('/sharks/getshark');
                }
        });
};

exports.delete =  async (req, res) =>{
        try {
                await Shark.findByIdAndDelete(req.params.id);
                res.redirect('/sharks/getshark');
                
        } catch (err) {
                res.status(400).send('Shark not found in the database');
                
        }
        
};

exports.list = function (req, res) {
        Shark.find({}).exec(function (err, sharks) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getshark', {
                        sharks: sharks
                });
        });
};

exports.getOne = async(req, res) =>{
        await Shark.findOne({_id: req.params.id}).exec(function(err, sharks){
                if(err){
                        return res.send(500, err);
                }
                res.render('updateshark',{
                        name: sharks.name,
                        character: sharks.character,
                        id: req.params.id
                });
        });
                       
}

exports.update = async (req, res) => {
        try {
                var name = req.body.name;
                var character = req.body.character;
                console.log(req.params.id)
                await Shark.findByIdAndUpdate({_id: req.params.id},{
                        name,
                        character
                }); 
                res.redirect('/sharks/getshark');
        } catch (err) {
                res.status(400).send('Shark not updated in the database');
                
        }


};