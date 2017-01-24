var mongoose = require('mongoose');
var groceryItemModel = require('./models/GroceryItemModel.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/grocerylist', function () {
    console.log('connected to Mongodb');
    mongoose.connection.db.dropDatabase();
    var items = [
        {
            name: "Ice Cream",
            purchased: false
    },
        {
            name: "Waffles",
            purchased: false
    },
        {
            name: "Candy",
            purchased: true
    },
        {
            name: "Chips",
            purchased: false
    }
    ];

    items.forEach(function (item) {
        new groceryItemModel(item).save();
    });
});
