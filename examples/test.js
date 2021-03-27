/* 
   nvp accessor example 
*/


// person object to access
var person = {
  "givenName": "John",
  "familyName": "Doe",
  "age": 21,
  "_nvp" : [
    {"name" : "hatsize", "value" : null},
    {"name" : "middleName", "value" : "Seymore"},
    {"name" : "nicknames", "value" : ["J","JJ","Johnboy","Jack"]},
    {"name" : "address", "value": {"street":"123 main", "city": "byteville", "state": "MD", "zip": "12345"}}
  ]
};

var a = require("./../nvp-accessor.js")({message:person});
// initialize the accessor
//a.init({message:person});

// find individual properties
// in the preloaded object
console.log("=== find properties");

console.log(a.find({name:"givenName"}));
console.log(a.find({name:"middleName"}));
console.log(a.find({name:"familyName"}));
console.log(a.find({name:"address"}));
console.log(a.find({name:"nicknames"}));
console.log(a.find({name:"hatsize"}));

// create a new object 
// w/ a collection of properties
// found in the preloaded object
console.log("=== property collections");

var props = ["givenName", "familyName", "middleName", "address", "nicknames", "hatsize"];
console.log(a.gather({collection:props}));

/*
 * EOF
 */
