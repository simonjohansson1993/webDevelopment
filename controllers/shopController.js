/*eslint-disable*/

var express = require('express');
var router = express.Router();
var Shop = require('../models/Shop');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Item = require('../models/Item');
// Return a list of all bosses
router.get('/', function(req, res, next) {
    Shop.find(function(err, shops) {
        if (err) { return next(err); }
        res.json({'Shop': shops});
    });
});

// Create a new boss
router.post('/', function(req, res, next) {
    
    const shop = new Shop({
            _id: new mongoose.Types.ObjectId(),
            name : req.body.name,
            items:  req.body.items
                
            
               
    });
    shop.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(shop);
    });
});



// Return the boss with the given ID
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Shop.findById(id, function(err, shop) {
        if (err) { return next(err); }
        if (shop === null) {
            return res.status(404).json({'message': 'Shop not found'});
        }
        res.json(shop);
    });
});

router.get('/:id/items', function(req, res, next) {
    var id = req.params.id;
    Shop.findById(id, function(err, shop) {
        if (err) { return next(err); }
        if (shop === null) {
            return res.status(404).json({'message': 'Shop not found'});
        }
        res.json(shop);
    });
});



// Delete the boss with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Shop.findOneAndDelete({_id: id}, function(err, shop) {
        if (err) { return next(err); }
        if (shop === null) {
            return res.status(404).json({'message': 'Shop not found'});
        }
        res.json(shop);
    });
});



module.exports = router;