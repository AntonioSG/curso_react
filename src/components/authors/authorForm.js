"use strict";

var React = require('react');

var AuthorForm = React.createClass({
   render: function () {
       return (
           <div>
               <label>Nombre</label>
               <input type="text" name="firstname" className="form-control"
                      placeholder="Nombre del autor"/>
               <br/>
               <label>Apellidos</label>
               <input type="text" name="lastname" className="form-control"
                      placeholder="Apellidos del autor"/>
               <br/>
               <input type="submit" className="btn btn-info" value="Guardar"/>
           </div>
       );
   }
});

module.exports = AuthorForm;