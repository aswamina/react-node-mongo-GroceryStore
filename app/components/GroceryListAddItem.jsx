var React = require('react');
var ReactDOM = require('react-dom');
var itemActionCreator = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {input: "Goya"};
    },
    handleAddItemInput: function(e) {
        this.setState({input: e.target.value});
    },
    addItem: function(e) {
        e.preventDefault();
        console.log("Adding Item : ", this.state.input);
        itemActionCreator.add({
            name:this.state.input
        });
        this.setState({input: ""});
    },
    render: function() {
        return (
            <div className="grocery-addItem">
            <form onSubmit={this.addItem}>
                    <input value={this.state.input} type='text' onChange={this.handleAddItemInput}/>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
})