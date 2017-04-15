"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>REACT & REDUX</h1>
                <p>Esto es una aplicacion con React!</p>
                <Link className="btn btn-info" to="about">Saber más</Link>
            </div>
        );
    }
});

module.exports = Home;