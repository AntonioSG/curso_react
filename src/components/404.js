"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h3>404 - Página no encortrada.</h3>
                <p>Upss, no hay nada que ver aquí.</p>
                <Link to="app">Volver al inicio</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;
