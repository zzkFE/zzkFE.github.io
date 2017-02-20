/*! 
 tshirt 
 发布时间：2016-08-21 14:08:24 
 游订公司
*/
"use strict";function compileList(a,b,c){var d=[];return a.include.forEach(function(a){c=compileList(a,b,c)}),a[b].forEach(function(a){c.forEach(function(b,c){b.tag===a.tag&&d.push(c)}),c.push(a)}),c.filter(function(a,b){return d.indexOf(b)===-1})}function compileMap(){function a(a){d[a.tag]=a}var b,c,d={};for(b=0,c=arguments.length;b<c;b+=1)arguments[b].forEach(a);return d}function Schema(a){this.include=a.include||[],this.implicit=a.implicit||[],this.explicit=a.explicit||[],this.implicit.forEach(function(a){if(a.loadKind&&"scalar"!==a.loadKind)throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=compileList(this,"implicit",[]),this.compiledExplicit=compileList(this,"explicit",[]),this.compiledTypeMap=compileMap(this.compiledImplicit,this.compiledExplicit)}var common=require("./common"),YAMLException=require("./exception"),Type=require("./type");Schema.DEFAULT=null,Schema.create=function(){var a,b;switch(arguments.length){case 1:a=Schema.DEFAULT,b=arguments[0];break;case 2:a=arguments[0],b=arguments[1];break;default:throw new YAMLException("Wrong number of arguments for Schema.create function")}if(a=common.toArray(a),b=common.toArray(b),!a.every(function(a){return a instanceof Schema}))throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!b.every(function(a){return a instanceof Type}))throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new Schema({include:a,explicit:b})},module.exports=Schema;