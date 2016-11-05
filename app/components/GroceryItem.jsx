var React = require('react');
var ReactDOM = require('react-dom');
var itemActionCreator = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    togglePurchased: function(e) {
        e.preventDefault();
        
        if (this.props.item.purchased) {
            itemActionCreator.unbuy(this.props.item);
        } else {
            itemActionCreator.buy(this.props.item);
        }
    },
    deleteItem: function(e) {
        e.preventDefault();
        itemActionCreator.delete(this.props.item);
    },
    render: function() {
        return (<div className="grocery-item">
                    <div className="eightColumns">
                        <h4 className={this.props.item.purchased? "strikethrough": ""}>{this.props.item.name}</h4>
                    </div>
                    <form className="threeColumns" onSubmit={this.togglePurchased}>
                        <button className={this.props.item.purchased ? "" : "button-primary"}>{this.props.item.purchased ? "Unbuy": "Buy"}</button>
                    </form>
                    <form className="oneColumn" onSubmit={this.deleteItem}>
                        <button>&times;</button>
                    </form>
                </div>
        )
    }
})