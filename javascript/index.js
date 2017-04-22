var first = $("contain_first"),
    secend = $("contain_secend"),
    select_first = document.getElementsByClassName('select_first'),
    sp = $("sp_p"),
    de = $("de_p");

function change_page(){
    first.style.display = "none";
    secend.style.display = "block";
}

function change_page_secend(){
    first.style.display = "block";
    secend.style.display = "none";
}

function delateLi(){
    
    for(var i = 0;i <= select_first.length-1;i++){
        select_first[i].classList.add('two');    

    }
    
    sp.style.display = "none";
    de.style.display = "block"; 


}



function $(id){
    return document.getElementById(id);
}