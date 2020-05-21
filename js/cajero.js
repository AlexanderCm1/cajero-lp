class Cajero{
    constructor(pass){
        this.boton1 = 1;
        this.boton2 = 2;
        this.boton3 = 3;
        this.boton4 = 4;
        this.boton5 = 5;
        this.boton6 = 6;
        this.boton7 = 7;
        this.boton8 = 8;
        this.boton9 = 9;
        this.boton0 = 0;
        this.botonnada = "";
        this.botonp = ".";
        this.contra = pass;
    }
    getB0(){
        return this.boton0;
    }
    getB1(){
        return this.boton1;
    }
    getB2(){
        return this.boton2;
    }
    getB3(){
        return this.boton3;
    }
    getB4(){
        return this.boton4;
    }
    getB5(){
        return this.boton5;
    }
    getB6(){
        return this.boton6;
    }
    getB7(){
        return this.boton7;
    }
    getB8(){
        return this.boton8;
    }
    getB9(){
        return this.boton9;
    }
    getBn(){
        return this.botonnada;
    }
    getBp(){
        return this.botonp;
    }
    validarPass(){
        var x;
        if(this.contra == '12345678'){

            x = 1;

        }else{
            x = 0;
        }
        return x;
    }
    validarRetiro(){
        var x;
        var datos2 = document.querySelector("#segunda-capa");
        var datos3 = document.querySelector("#tercera-capa");
        if(datos2.style.display == "none" && datos3.style.display == "block"){
            x = 1;
        }else {
            x = 0;
        }
        return x;
    }

}
/**************BOTONES */
/********* DOM ************/
var botonafter = document.querySelector("#afterall2");
var botonk5 = document.querySelector("#five");
var input2 = document.querySelector(".sinborde");
var botonK1 = document.querySelector("#first");
var botonk6 = document.querySelector("#six");
var ok = document.querySelector("#ok");
var input = document.querySelector("#clave");
var b1 = document.querySelector("#button1");
var b2 = document.querySelector("#button2");
var b3 = document.querySelector("#button3");
var b4 = document.querySelector("#button4");
var b5 = document.querySelector("#button5");
var b6 = document.querySelector("#button6");
var b7 = document.querySelector("#button7");
var b8 = document.querySelector("#button8");
var b9 = document.querySelector("#button9");
var b0 = document.querySelector("#button0");
var bp = document.querySelector("#buttonp");


/***************FUNCIONES BOTONES***********/
function capP(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let b = document.getElementById("sinborde");
    let pantalla = document.getElementById("quinta-capa");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    }else if(input.value.length < 8){
        a.value += kjero.getBp();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getBp();
    }
    
}

function cap0(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB0();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB0();
    }
    
}
function cap1(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB1();
    }if(pantalla.style.display == "block"){
    b.value += kjero.getB1();
}
    
}
function cap2(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB2();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB2();
    }
}
function cap3(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB3();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB3();
    }
}
function cap4(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB4();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB4();
    }
}
function cap5(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB5();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB5();
    }
}
function cap6(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB6();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB6();
    }
}
function cap7(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB7();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB7();
    }
}
function cap8(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB8();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB8();
    }
}
function cap9(){
    let kjero = new Cajero(); 
    let a = document.getElementById("clave");
    let pantalla = document.getElementById("quinta-capa");
    let b = document.getElementById("sinborde");
    if (input.value.length > 8 ){
        input.value = input.value.slice(0,8);
    } else if(input.value.length < 8){
        a.value += kjero.getB9();
    }if(pantalla.style.display == "block"){
        b.value += kjero.getB9();
    }
}
function dig8(e){
 
    if(e.value.length > 8){
        e.value = e.value.slice(0,8);
    }
}
/************************Eventos-BOTONES ***********************/
bp.addEventListener('click',function(){
    capP();
});
b0.addEventListener('click',function(){
    cap0();
});
b1.addEventListener('click',function(){
    cap1();
});
b2.addEventListener('click',function(){
    cap2();
});
b3.addEventListener('click',function(){
    cap3();
});
b4.addEventListener('click',function(){
    cap4();
});
b5.addEventListener('click',function(){
    cap5();
});
b6.addEventListener('click',function(){
    cap6();
});
b7.addEventListener('click',function(){
    cap7();
});
b8.addEventListener('click',function(){
    cap8();
});
b9.addEventListener('click',function(){
    cap9();
});
input.addEventListener('input',function(){
    dig8(input);
});

/********validando contraseña */
function validar(){
    let kjero = new Cajero(input.value);
    if(kjero.validarPass() == 1 ){
        var datos = document.querySelector("#primera-capa");
        var datos2 = document.querySelector("#segunda-capa");
        datos.style.display = "none";
        datos2.style.display = "block";
    }else if(kjero.validarPass() != 1){
        alert(":(")
    }

}
var y = 0;
ok.addEventListener('click',function(){
    validar();
    y ++;
    console.log(y);
});
/*********acciones del retiro */
function aRetiro(){
    var datos2 = document.querySelector("#segunda-capa");
    if(datos2.style.display == "block"){
        
        let datos3 = document.querySelector("#tercera-capa");
        let extboton= document.querySelector("#afterall");
        let extboton2= document.querySelector("#afterall2");
        datos3.style.display = "block";
        extboton.style.display = "block";
        extboton2.style.display = "block";
        datos2.style.display="none";
    }else{
        
    }
}
var x = 0;
botonK1.addEventListener('click',function(){

    aRetiro();
    //capturando los clicks
    x++;
    console.log(x);

});
/*******Retiro en soles */
function retiroSoles(){
    var datos3 = document.querySelector("#tercera-capa");
    var kjero = new Cajero();
    if(datos3.style.display == "block" && x == 2){
        let datos4 = document.querySelector("#cuarta-capa");
        datos4.style.display = "block";
        datos3.style.display = "none";
    }
}
botonK1.addEventListener('click',function(){
    retiroSoles();
})
/*********Retirar multiplos de 10 */
function retirar10(){
    var datos4 = document.querySelector("#cuarta-capa");
    if(datos4.style.display == "block" ){
        let datos5 = document.querySelector("#quinta-capa");
        datos5.style.display = "block";
        datos4.style.display = "none";
    }
}

botonk6.addEventListener('click',function(){
    retirar10();
})

/**********validar transaccion ****/
function validarTrans(){
    var datos5 = document.querySelector("#quinta-capa");
    if(datos5.style.display == "block" && (input2.value % 10) == 0 && (input2.value != "")){
        let datos6 = document.querySelector("#sexta-capa");
        datos6.style.display = "block";
        datos5.style.display = "none";
    }else if((input2.value % 10) != 0 || (input2.value == "")){
        alert("no es multiplo de 10 o no inserto nada");
        input2.value = "";
    }
}
botonk5.addEventListener('click',function(){
    validarTrans();
})

/***********Adios final */
function adios(){
    var datos6 = document.querySelector("#sexta-capa");
    if(datos6.style.display == "block"){
        let datos7 = document.querySelector("#septima-capa");
        datos7.style.display = "block";
        datos6.style.display = "none";
    }
}
botonafter.addEventListener('click',function(){
    adios();
})

