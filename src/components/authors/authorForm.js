"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        error: React.PropTypes.object
    },

   render: function () {
       return (
           <div>
               <Input name="firstName"
                      label="Nombre"
                      placeholder="Nombre del autor"
                      value={this.props.author.firstName}
                      onChange={this.props.onChange}
                      error={this.props.error.firstName}/>

               <br/>

               <Input name="lastName"
                      label="Apellidos"
                      placeholder="Apellidos del autor"
                      value={this.props.author.lastName}
                      onChange={this.props.onChange}
                      error={this.props.error.lastName}/>

               <br/>

               <input type="submit" className="btn btn-info" value="Guardar"
                    onClick={this.props.onSave}/>
           </div>
       );
   }
});

module.exports = AuthorForm;