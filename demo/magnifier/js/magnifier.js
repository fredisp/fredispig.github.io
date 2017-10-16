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
    var bimg=document.getElementById("bimg");
    var simg=document.getElementById("simg");
      oleft.onmouseover=function(){
        oright.style.display="block";
        ofloatDiv.style.display="block";
    }
    oleft.onmouseout=function(){
        oright.style.display="none";
        ofloatDiv.style.display="none";
    }
    oleft.onmousemove=function(ev){

        var ofloatDivLeft=ev.clientX-ofloatDiv.offsetWidth/2;
        var ofloatDivTop=ev.clientY-ofloatDiv.offsetHeight/2;
        if(ofloatDivLeft<0){ofloatDivLeft=0}
        if(ofloatDivTop<0){ofloatDivTop=0}
        if(ofloatDivLeft>oleft.offsetWidth-ofloatDiv.offsetWidth){
            ofloatDivLeft=oleft.offsetWidth-ofloatDiv.offsetWidth;
        }
        if(ofloatDivTop>oleft.offsetHeight-ofloatDiv.offsetHeight){
            ofloatDivTop=oleft.offsetHeight-ofloatDiv.offsetHeight;
        }
        ofloatDiv.style.left=ofloatDivLeft+'px';
        ofloatDiv.style.top=ofloatDivTop+'px';
        /*设置大图的宽高*/
        var biliw=oleft.offsetWidth/ofloatDiv.offsetWidth;
        var bilih=oleft.offsetHeight/ofloatDiv.offsetHeight;
        bimg.style.width=biliw*oright.offsetWidth+"px";
        bimg.style.height=bilih*oright.offsetHeight+"px";

        bimg.style.left=oright.style.left-ofloatDivLeft*biliw+"px";
        bimg.style.top=oright.style.top-ofloatDivTop*bilih+"px";

        console.log(ev);
    }
}
