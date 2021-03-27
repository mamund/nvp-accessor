## nvp-accessor

_Author : Mike Amundsen (@mamund)_


### module constructor
    message = {};
    nameValuePair = "_nvp";

  * const accessor = require('./nvp-accessor')()
  * const accessor = require('./nvp-accessor')({message:m})
  * const accessor = require('./nvp-accessor')({message:m, nameValuePair:p})

### initialize the accessor 

   message = {}
   nameValuePair = "_nvp"
 
 * accessor.init({message:m,nameValuePair:p})
 
### return the preloaded message for this instance
  * accessor.message();
 
### gather a set of properties from the message
   
   c = ['field1','field2',...] 
   
 * accessor.gather({collection:c})
 * accessor.gather({collection:c, message:m})
 * accessor.gather({collection:c, message,:m nameValuePair:p})
 
### find a single property's value
   
   name = 'fieldName';
   message = {};
   message = {...};
   nameValuePair = "_nvp";
   
 * accessor.find({name:n})
 * accessor.find({name:n, message:m})
 * accessor.find({name:n, message:m, nameValuePair:n})
 
 ### shortcuts for functions
 * accessor.i <== alias for init
 * accessor.g <== alias for gather
 * accessor.f <== alias for find
 * accessor.m <== alias for message

