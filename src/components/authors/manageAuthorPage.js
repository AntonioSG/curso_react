"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            author: { id: "", firstName: "", lastName: "" },
            error: {}
        };
    },

   setAuthorState: function (event) {
       let field = event.target.name;
       let value = event.target.value;
       this.state.author[field] = value;
       return this.state({author: this.state.author});
   },

   authorFromIsValid: function () {
       let fromValid = true;
       this.state.error = {};

       if(this.state.author.firstName.length < 3){
           this.state.error.firstName = "El nombre debe tener mas de 3 caracteres";
           fromValid = false;
       }

       if(this.state.author.lastName.length < 3){
           this.state.error.lastName = "Los apellidos debe tener mas de 3 caracteres";
           fromValid = false;
       }

       this.setState({error: this.state.error});
       return fromValid;
   },

   saveAuthor: function (event) {
        event.preventDefault();

        if(!this.authorFromIsValid()){
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        Toastr.success("Autor guardado con exito.");
        this.transitionTo("authors");
   },

   render: function () {
        return (
            <div>
                <h2>Gestor de autores</h2>
                <AuthorForm
                    author = {this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    error={this.state.error}
                />
            </div>
        );
   }
});

module.exports = ManageAuthorPage;