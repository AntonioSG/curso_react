"use strict";

var authors = require("./AuthorData").author;
var _ = require("lodash");

var _generateID = function (author) {
    return author.firstName.toLowerCase() + "-" + author.lastName.toLowerCase();
}

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item))
}

var AuthorApi = {

    getAllAuthors: function () {
        return _clone(authors);
    },

    getAuthorByID: function (id) {
        var author = _.find(authors, {id : id});
        return _clone(author);
    },
    
    saveAuthor: function (author) {
        if(author.id){
            let authorExistingAuthor = _.indexOf(authors, _.find(authors, {id : author.id}));
            author.splice(authorExistingAuthor, 1, author);
        }else{
            author.id = _generateID(author);
            authors.push(author);
        }
        return _clone(author);
    },

    removeAuthor: function (author) {
        _.remove(author, {id : id});
    }

};

module.exports = AuthorApi;