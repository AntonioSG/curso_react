"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
   render: function () {
        return (
            <div>
                <h2>Gestor de autores</h2>
                <AuthorForm/>
            </div>
        );
   }
});

module.exports = ManageAuthorPage;