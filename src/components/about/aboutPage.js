"use strict";

var React = require("react");

var About = React.createClass({
   render: function () {
       return (
         <div>
             <h1>About</h1>
             <p>
                 Las tecnologias que he utilizado son:
                 <ul>
                     <li>React</li>
                     <li>React Router</li>
                     <li>Flux</li>
                     <li>Glub</li>
                     <li>Node</li>
                     <li>Browserfy</li>
                     <li>Bootstrap</li>
                 </ul>
             </p>
         </div>
       );
   }
});

module.exports = About;
