/*( function ( $, mw ) {
    "use strict";
	mw.hook( 've.activationComplete' ).add( function() {

    //"use strict";
    console.log("lorem ipsum");







//$(".ace_content").live("click",function(){console.log("hellow");});
//document.getElementsByClassName('ace_content').onLoad( function(){ alert("yoyooy")});








	} );



}( jQuery, mediaWiki ) );
*/
myFunc();

function myFunc() {
  if ($('.ace_content').length) {
   
      console.log("DG");
      // do stuff
  } else {
    setTimeout(myFunc, 10);
  }
}





