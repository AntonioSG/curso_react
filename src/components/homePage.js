"use strict";

var React = require("react");

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>REACT & REDUX</h1>
                <p>Esto es una aplicacion con React!</p>
            </div>
        );
    }
});

module.exports = Home;