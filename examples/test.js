/* 
   nvp accessor example 
*/

var val = require('jsonschema').Validator;
var v = new val();

var person = require('./person.js');
var a = require("./../nvp-accessor.js")({message:person});

// find individual properties
// in the preloaded object
console.log("=== find properties");

console.log(a.find({name:"givenName"}));
console.log(a.find({name:"middleName"}));
console.log(a.find({name:"familyName"}));
console.log(a.find({name:"address"}));
console.log(a.find({name:"nicknames"}));
console.log(a.find({name:"hatsize"}));

// find a property of a property
console.log(a.find({name:'city',message:a.find({name:'address'})}));

// create a new object 
// w/ a collection of properties
// found in the preloaded object
console.log("=== property collections");

var props = ["givenName", "familyName", "middleName", "nicknames"];
console.log(a.gather({collection:props}));

/*
 * EOF
 */
