/**
 * Created by wang on 2017/10/17.
 */



//function 嵌套function
    function foo(x){
        var temp=3;
        function bar(y){
            alert(x+y+(++temp))
        }
        bar(10)
    }

//闭包
function fooo(x){
    var temp=3;
    return function(y){
        alert(x+y+(++temp));
    }

}function foo2() {
    var bar = foo(3);
    alert("s");
    alert("d");
}
//
function foooo(x) {
    var tmp = 3;
    return function (y) {
        alert(x + y + tmp);
        x.memb = x.memb ? x.memb + 1 : 1;
        alert(x.memb);
    }
}
var age = new Number(2);
var bar = foooo(age);
function foo3() {

   bar(10);
     // bar 现在是一个引用了age的闭包
}