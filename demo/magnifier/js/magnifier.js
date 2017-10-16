/**
 * Created by wang on 2017/10/16.
 */

   /* var oleft=document.getElementById("left");
    var oright=document.getElementById("right");
    oleft.onmouseover=function(){
        oright.style.display="block";
    }
*/

window.onload= function () {


  var oleft=document.getElementById("left");
    var oright=document.getElementById("right");
    var ofloatDiv=document.getElementById("floatDiv");
    oleft.onmouseover=function(){
        oright.style.display="block";
        ofloatDiv.style.display="block";
    }
    oleft.onmouseout=function(){
        oright.style.display="none";
        ofloatDiv.style.display="none";
    }
    oleft.onmousemove=function(ev){
        console.log(ev);
        ev.clientX-;
        ev.clientY;
    }
}
