let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros=numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

let tarjetasDestapadas=0;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimientos=0;
let mostrarMovimientos=document.getElementById('movimientos');
let aciertos=0;
let mostrarAciertos=document.getElementById('aciertos');
let temporizador=false;
let timer = 30;
let mostrarTiempo=document.getElementById('t-restante');
let tiempoRegresivo=null;

function bloquearTarjetas(){
    for (let i=0;i<=15;i++){
        let tarjetaBloqueada=document.getElementById(i);
        tarjetaBloqueada.innerHTML=numeros[i];
        tarjetaBloqueada.disabled=true;
    }
}

function contarTiempo(){
    tiempoRegresivo=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML=`Tiempo: ${timer} segundos`;
        if(timer==0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
         }


    },1000);
}



function destapar(id){
    if(temporizador==false){
        contarTiempo();
        temporizador=true;
    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas==1){
        tarjeta1=document.getElementById(id);
        primerResultado=numeros[id];
        tarjeta1.innerHTML=primerResultado;
        tarjeta1.disabled=true;

    }else if(tarjetasDestapadas==2){
        tarjeta2=document.getElementById(id);
        segundoResultado=numeros[id];
        tarjeta2.innerHTML=segundoResultado;

        tarjeta2.disabled=true;
        movimientos++;
        mostrarMovimientos.innerHTML=`Movimientos: ${movimientos}`;

        if(primerResultado==segundoResultado){
            tarjetasDestapadas=0;

            aciertos++;
            mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`;
            if(aciertos==8){
                mostrarAciertos.innerHTML=`Aciertos: ${aciertos}, terminaste`;
            }
        }else {
            setTimeout(()=>{
                tarjeta1.innerHTML='';
                tarjeta2.innerHTML='';
                tarjeta1.disabled=false;
                tarjeta2.disabled=false;
                tarjetasDestapadas=0;
            },2000);
        }
    }

}