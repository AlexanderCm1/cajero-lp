
function caputar1(){

    var agregar1 = document.getElementById("clave");
    if(agregar1.value.length > 8){
        agregar1.value = agregar1.value.slice(0,8);
    }else if(agregar1.value.length < 8){
        agregar1.value +=1;
    }else{

    }
    

    //agregar1.value = agregar1.value + 1; 

}
function numeros8(e){
    
    if(e.value.length > 8){
        e.value = e.value.slice(0,8);
    }

}
var button1 = document.querySelector("#button1");
var input = document.querySelector("#clave"); 
button1.addEventListener('click', function(){
    caputar1();
});
input.addEventListener('input',function() {
    numeros8(this);
});


var a = "Bienvenido al curso de javascript curso";

var recorte = a.slice(0,3);
console.log(recorte);
