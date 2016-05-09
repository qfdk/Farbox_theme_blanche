
// 笔记 没有实质用途

$(document).ready(function () {
    if (window.innerWidth < 750) {
        $('.col-md-4').hide();
    } else {
        $('.col-md-4').show();
    }
});

	    var tmp=document.getElementsByClassName('col-md-4');
	if(window.innerWidth < 750)
    {
        tmp[0].style.display="none";
    }
    
window.onresize= function cacher(){
    var tmp=document.getElementsByClassName('col-md-4');
    if(window.innerWidth < 750)
    {
        tmp[0].style.display="none";
    }else{
        tmp[0].style.display="block";
    }
}