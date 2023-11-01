function sample(){
    document.write("welcome here")
}
function btntext()
{
    document.getElementById('p2').innerHTML='Welcome to js '+ document.getElementById('txtname').value;
}

function text2(){
    var a= parseInt(document.getElementById('txt2').value);
    var b= parseInt(document.getElementById('txt3').value);
    document.getElementById('p3').innerHTML=a+b;
}

function text3(){
    var a= parseInt(document.getElementById('txt4').value);
    var b= parseInt(document.getElementById('txt5').value);
    document.getElementById('p4').innerHTML=a/b;
}

function text4(){
    var a= parseInt(document.getElementById('txt6').value);
    var b= parseInt(document.getElementById('txt7').value);
    document.getElementById('p5').innerHTML=a-b;
}

function sqr(){
    var c= parseInt(document.getElementById('txt8').value);
    document.getElementById('p6').innerHTML=c+c;
}
