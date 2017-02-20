/*! 
 tshirt 
 发布时间：2016-08-21 14:08:24 
 游订公司
*/
"use strict";function Mark(a,b,c,d,e){this.name=a,this.buffer=b,this.position=c,this.line=d,this.column=e}var common=require("./common");Mark.prototype.getSnippet=function(a,b){var c,d,e,f,g;if(!this.buffer)return null;for(a=a||4,b=b||75,c="",d=this.position;d>0&&"\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(d-1))===-1;)if(d-=1,this.position-d>b/2-1){c=" ... ",d+=5;break}for(e="",f=this.position;f<this.buffer.length&&"\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(f))===-1;)if(f+=1,f-this.position>b/2-1){e=" ... ",f-=5;break}return g=this.buffer.slice(d,f),common.repeat(" ",a)+c+g+e+"\n"+common.repeat(" ",a+this.position-d+c.length)+"^"},Mark.prototype.toString=function(a){var b,c="";return this.name&&(c+='in "'+this.name+'" '),c+="at line "+(this.line+1)+", column "+(this.column+1),a||(b=this.getSnippet(),b&&(c+=":\n"+b)),c},module.exports=Mark;