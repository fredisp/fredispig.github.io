/**
 * Created by wong on 2018/3/6.
 */
(function(){
    init();
    function init(dom,args){
        if(args.current<= args.pageCount) {
            fillHtml(dom.args);
            bindEvent(dom,args)
        }else { alert("wrong num")}
    }
    function fillHtml(dom,args){
        //btn 上一页
        //数字页数部分
        //btn 下一页
        don.empty();
        if(args.current>1){
            dom.append('<a href="#">)
        }
    }
    function bindEvent(dom,args){

    }
    $.fn.createPage=function(options){
        var args= $.extend({
            pageCount:15,
            current:2,
            backFn:function(){
            fillHtml();
        }
        })
    }
})(jQuery)