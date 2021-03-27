/* 
   name-value pair accessor module 
   2021-03-26 : @mamund

 * module constructor
 * create an instance of the accessor
 *   message = {};
 *   nameValuePair = "_nvp";
 * const accessor = require('./accessor')()
 * const accessor = require('./accessor')({message:m})
 * const accessor = require('./accessor')({message:m, nameValuePair:p})
 
 * initialize the accessor w/ message and/or 
 * the name of the name-value array
 *   message = {}
 *   nameValuePair = "_nvp"
 * accessor.init({message:m,nameValuePair:p})
 
 * return the preloaded message for this instance
 * accessor.message();
 
 * gather a set of properties from the message
 *   c = ['field1','field2',...] 
 * accessor.gather({collection:c})
 * accessor.gather({collection:c, message:m})
 * accessor.gather({collection:c, message,:m nameValuePair:p})
 
 * find a single property's value
 *   name = 'fieldName';
 *   message = {};
 *   message = {...};
 *   nameValuePair = "_nvp";
 * accessor.find({name:n})
 * accessor.find({name:n, message:m})
 * accessor.find({name:n, message:m, nameValuePair:n})
 
 * shortcuts for functions
 * accessor.i <== alias for init
 * accessor.g <== alias for gather
 * accessor.f <== alias for find
 * accessor.m <== alias for message
 */

// args = {message:{}, nameValuePair:""}
module.exports = function(args) {
  
  // optionally pass in object message to accces
  var local = {};
  var a = args || {};
  local.m = a.message || {};
  local.p = a.nameValuePair || "_nvp"
  
  // initialize instance
  // args = {message:{}, nameValuePair:""}
  function init(args) {
    var a = args || {};
    local.m = a.message || {};
    local.p = a.nameValuePair || "_nvp"
  }

  // return the preloaded message (if any)
  function message() {
    return local.m;
  }
  
  // return a normalized list of properties
  // args = {collection:[], message:{}, nameValuePair:""}
  function gather(args) {
    var a = args || {};
    var c = a.collection || [];
    var m = (a.message || local.m) || {};
    var p = (a.nameValuePair || local.p) || "_nvp";
    var r = {};
    
    if(m==={} || c.length===0) {
      r={};
    }
    else {
      r = {};
      c.forEach(function(i) {
        r[i] = find({name:i, message:m, nameValuePair:p})
      });
    }
    return r;
  }
  
  // return a single property
  // whether explicit or implicit
  // args = {message:{}, name:"", nameValuePair:""}
  function find(args) {
    var a = args || {};
    var n = a.name || "";
    var m = (a.message || local.m) || {};
    var p = (a.nameValuePair || local.p ) || "_nvp";
    var r = undefined;

    if(m==={} || n==="") {
      r=undefined;
    }
    else {
      if(m.hasOwnProperty(n)) {
        r=m[n];
      }
      else {
        if(m.hasOwnProperty(p)) {
          try {
            r = m[p].filter(function(i) {return i.name===n})[0].value;
          } 
          catch {
            r = undefined;
          }
        }
      }
    }
    return r;
  }

  // export functions
  var that = {};

  that.init = init;
  that.message = message;
  that.find = find;
  that.gather = gather;

  that.i = init;
  that.m = message;
  that.f = find;
  that.g = gather;
  
  return that;
}

/*
 * EOF
 */
