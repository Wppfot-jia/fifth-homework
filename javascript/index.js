var first = $("contain_first"),
    secend = $("contain_secend"),
    select_first = document.getElementsByClassName('select_first'),
    sp = $("sp_p"),
    de = $("de_p"),
    selectFirst = $("selectFirst"),
    mm = $("mm"),
    myClass = document.querySelector('.select-first ul'),
    myCreate = document.querySelector('.s-forth ul');
    

//改变页面
function change_page(){
    first.style.display = "none";
    secend.style.display = "block";
}

//改变页面
function change_page_secend(){
    first.style.display = "block";
    secend.style.display = "none";
}

//点击排序删除 将所有li选中
function delateLi(){
    //遍历所有的li 给它们添加two类名
    for(var i = 0;i <= select_first.length-1;i++){
        select_first[i].classList.add('two');    
    }
    //将排序删除改为删除
    sp.style.display = "none";
    de.style.display = "block"; 
}

//将当前点击的元素标记为ture
selectFirst.addEventListener("click",function(){
    //判断是否点击了排序删除，如果没点点击，下面的操作无效
    if(mm.className.indexOf("two") != -1){
        //通过事件委托 获取到底层元素
        myClass.addEventListener('click',function(e){
            //如果点击的这个元素存在 且这个元素的标签名为li 给它添加ture
            if(e.target && e.target.nodeName == "LI"){
                e.target.classList.add("ture");
            //如果这个元素的标签名为div 给它的父级元素添加ture   
            }else if(e.target.nodeName == "DIV"){
                e.target.parentNode.classList.add("ture");
                //去掉div的border-right
                e.target.style.border = "none";
            }
        }) 
    }
},false);

//移除选中的li
function removeLi(){
    //遍历所有li  
    for(i = 0,len = select_first.length;i <= len-1;i++){
        //判断当前li是否含有ture类名
        if(select_first[i].className.indexOf("ture") != "-1"){
            //如果有就移除它
            myClass.removeChild(select_first[i]);
            //删除li后 整个li列表会向前移，让i也向前移
            i--;
        }
    }
}

//添加新的标签
myCreate.addEventListener("click",function(e){
    if(e.target && e.target.nodeName == "DIV"){
        
        //创建li
        var newLi =  document.createElement("li");
        newLi.className = "select_first";
        
        //创建div
        var newDiv = document.createElement("div");
        newDiv.className = "inner";
        newDiv.innerHTML = e.target.innerHTML;
        
        //添加新节点
        newLi.appendChild(newDiv);
        myClass.appendChild(newLi);
        
        //移除当前点击的节点
        myCreate.removeChild(e.target.parentNode);
    }
},false)

    









function $(id){
    return document.getElementById(id);
}