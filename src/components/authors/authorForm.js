"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
   render: function () {
       return (
           <div>
               <Input name="firstName"
                      label="Nombre"
                      placeholder="Nombre del autor"
                      value={this.props.author.firstName}
                      onChange={this.props.onChange}/>

               <br/>

               <Input name="lastName"
                      label="Apellidos"
                      placeholder="Apellidos del autor"
                      value={this.props.author.lastName}
                      onChange={this.props.onChange}/>

               <br/>

               <input type="submit" className="btn btn-info" value="Guardar"
                    onClick={this.props.onSave}/>
           </div>
       );
   }
});

module.exports = AuthorForm;