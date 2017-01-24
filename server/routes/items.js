module.exports = function (app) {

    var groceryItemModel = require('./../models/GroceryItemModel.js');

    app.get('/api/items', function (request, response) {
        groceryItemModel.find(function (error, doc) {
            response.send(doc);
        });
    });
    app.post('/api/items', function (request, response) {
        var item = request.body;
        var GroceryItem = new groceryItemModel(item);
        GroceryItem.save(function (error, data) {
            response.status(300).send();
        });
    });
    app.route('/api/items/:id').delete(function (request, response) {
        groceryItemModel.findOne({
            _id: request.params.id
        }, function (error, gitem) {
            console.log("This item will get deleted " + gitem);
            gitem.remove();
        });
    }).patch(function (request, response) {
        groceryItemModel.findOne({
            _id: request.body._id
        }, function (error, doc) {
            for (var key in request.body) {
                doc[key] = request.body[key];
            }
            doc.save();
            response.status(200).send();
        })
    });
};
