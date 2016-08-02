/*( function ( $, mw ) {
    "use strict";
	mw.hook( 've.activationComplete' ).add( function() {

    //"use strict";
    console.log("lorem ipsum");

//$(".ace_content").live("click",function(){console.log("hellow");});
//document.getElementsByClassName('ace_content').onLoad( function(){ alert("yoyooy")});

);

}( jQuery, mediaWiki ) );
*/
myFunc();

function myFunc() {
  if ($('.ace_cursor').length) {


console.log("falit"); 
var latexSnippets = [{
            caption: "frac",
            snippet: " \\frac{$arg}{$arg}",
            meta: "env",
         },{
             caption: "underset",
             snippet: "\\underset{$1:text}{$2:text}",
             meta: "env"
         },{
            caption: "cases",
            snippet: "\\begin{cases}\n\\$case1 \\\\\\ \n\\$case2\n\\end{cases}",
            meta: "env",
         },{
            caption: "sum",
            snippet: "\\sum_{$inf}^{$sup}",
            meta: "env",
         },{
            caption: "indefinite integral",
            snippet: "\\int d${1:x}",
            meta: "env",
         },{
            caption: "matrix",
            snippet: "\\begin{matrix}\n$1 & $2\n\\$3 & $4\\end{matrix}",
            meta: "env",
         },{
            caption: "definite integral",
            snippet: " \\int_{$1}^{$2} d${3:x}",
            meta: "env",
         },{
            caption: "lim",
            snippet: "\\lim_{$1:x}",
            meta: "env",
         },{
            caption: "overrightarrow",
            snippet: "\\overrightarrow{$1:x}",
            meta: "env",
         },{
            caption: "overbrace",
            snippet: "\\overbrace{$1:x}",
            meta: "env",
         },{
            caption: "underbrace",
            snippet: "\\underbrace{$1:x}",
            meta: "env",
         },{
           caption: "Array",
           snippet: "\\begin{array}{${1:cc}}\n\t$2 & $3 \\\\\\\\\n\t$4 & $5\n\\end{array}",
           meta: "env",
         }
   ];

var latexCompleter = {
         getCompletions: function(editor, session, pos, prefix, callback) {
     return callback(null,latexSnippets);
    }
};

/*
var completers1 = [latexCompleter];
exports.setCompleters1 = function(val) {
    completers1.length = 0;
    if (val) completers1.push.apply(completers1, val);
};
*/
//exports.addCompleter1 = function(completer1) {
//    completers1.push(completer1);
//};

//completers.push(latexCompleter);

//      exports.latexCompleter = latexCompleter;
      console.log("DG");
      // do stuff
  } else {
    setTimeout(myFunc, 10);
  }
}
