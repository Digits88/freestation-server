// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/90be6f10c0483ef369bc1fa2f543e695 
// Or build this file again with packager using: packager build More/Hash
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.3.1.1",build:"0292a3af1eea242b817fecf9daa127417d10d4ce"};(function(){if(this.Hash){return;}var a=this.Hash=new Type("Hash",function(b){if(typeOf(b)=="hash"){b=Object.clone(b.getClean());
}for(var c in b){this[c]=b[c];}return this;});this.$H=function(b){return new a(b);};a.implement({forEach:function(b,c){Object.forEach(this,b,c);},getClean:function(){var c={};
for(var b in this){if(this.hasOwnProperty(b)){c[b]=this[b];}}return c;},getLength:function(){var c=0;for(var b in this){if(this.hasOwnProperty(b)){c++;
}}return c;}});a.alias("each","forEach");a.implement({has:Object.prototype.hasOwnProperty,keyOf:function(b){return Object.keyOf(this,b);},hasValue:function(b){return Object.contains(this,b);
},extend:function(b){a.each(b||{},function(d,c){a.set(this,c,d);},this);return this;},combine:function(b){a.each(b||{},function(d,c){a.include(this,c,d);
},this);return this;},erase:function(b){if(this.hasOwnProperty(b)){delete this[b];}return this;},get:function(b){return(this.hasOwnProperty(b))?this[b]:null;
},set:function(b,c){if(!this[b]||this.hasOwnProperty(b)){this[b]=c;}return this;},empty:function(){a.each(this,function(c,b){delete this[b];},this);return this;
},include:function(b,c){if(this[b]==undefined){this[b]=c;}return this;},map:function(b,c){return new a(Object.map(this,b,c));},filter:function(b,c){return new a(Object.filter(this,b,c));
},every:function(b,c){return Object.every(this,b,c);},some:function(b,c){return Object.some(this,b,c);},getKeys:function(){return Object.keys(this);},getValues:function(){return Object.values(this);
},toQueryString:function(b){return Object.toQueryString(this,b);}});a.alias({indexOf:"keyOf",contains:"hasValue"});}).call(this);