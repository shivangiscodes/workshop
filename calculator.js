function equation(val){
document.getElementById("txt1").value+=val
}

function calculation(val){
    var a=document.getElementById("txt1").value;
    var c=eval(a)
    document.getElementById("txt1").value=c;

}

function clear(val){
    document.getElementById("txt1").value=" ";

}