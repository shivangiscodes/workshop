//var a=10;
//var b=10;
// const d=20;
//var c;
//c=a+b;
//console.log(c);//


function add(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    console.log(a);
    console.log(b);
    var c=parseInt(a)+parseInt(b);    
    document.getElementById("answer").value=c;    
}

function sub(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    console.log(a);
    console.log(b);
    var d=parseInt(a)-parseInt(b);
    document.getElementById("answer").value=d;
}

function mult(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    console.log(a);
    console.log(b);
    var e=parseInt(a)*parseInt(b);
    document.getElementById("answer").value=e;
}

function div(){
    var a=document.getElementById("number1").value;
    var b=document.getElementById("number2").value;
    console.log(a);
    console.log(b);
    var f=parseFloat(a)/parseFloat(b);
    document.getElementById("answer").value=f;
}