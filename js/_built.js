Array.prototype.lastIndexOf=function(o){for(var index=this.length;index>=0;index--)if(index in this&&this[index]===o)return index;return-1},Array.prototype.insertAt=function(o,index){return index>-1&&index<=this.length?(this.splice(index,0,o),!0):!1},Array.prototype.insertBefore=function(o,toInsert){var index=this.indexOf(o);return-1==index?!1:0===index?(this.unshift(toInsert),!0):this.insertAt(toInsert,index-1)},Array.prototype.insertAfter=function(o,toInsert){var index=this.indexOf(o);return-1==index?!1:index==this.length-1?(this.push(toInsert),!0):this.insertAt(toInsert,index+1)},Array.prototype.remove=function(from,to){var rest=this.slice((to||from)+1||this.length);return this.length=0>from?this.length+from:from,this.push.apply(this,rest)},Array.prototype.first=function(attribut,value){for(var i=0;i<this.length;i++)if(this[i][attribut]==value)return this.slice(i,i+1)[0];return null},Array.prototype.last=function(){return this[this.length-1]},Array.prototype.where=function(attribut,value){for(var res=[],i=0;i<this.length;i++)this[i][attribut]==value&&res.push(this.slice(i,i+1));return res},String.prototype.replaceAll=function(replace,value){return this.replace(new RegExp(replace,"g"),value)},String.prototype.parseInt=function(){return 1*this};