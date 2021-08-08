////////////////////// VARIABLES //////
//cargar sonidos
var minieAmi = new buzz.sound("audio/minie-aMi", {
    formats: ["mp3"]
}),tibieAti = new buzz.sound("audio/tibie-aTi", {
    formats: ["mp3"]
}),iemuAel = new buzz.sound("audio/iemu-aEl", {
    formats: ["mp3"]
}),ieiAella = new buzz.sound("audio/iei-aElla", {
    formats: ["mp3"]
}),namAnos = new buzz.sound("audio/nam-aNosotros", {
    formats: ["mp3"]
}),bamAus = new buzz.sound("audio/bam-aUstedes", {
    formats: ["mp3"]
}),imAellos = new buzz.sound("audio/im-aEllos", {
    formats: ["mp3"]
}),
///////
gusta = new buzz.sound("audio/gusta", {
    formats: ["mp3"]
}),quisiera = new buzz.sound("audio/quisiera", {
    formats: ["mp3"]
}),necesito = new buzz.sound("audio/necesito", {
    formats: ["mp3"]
}),vivir = new buzz.sound("audio/vivir", {
    formats: ["mp3"]
}),trabajar = new buzz.sound("audio/trabajar", {
    formats: ["mp3"]
}),estudiar = new buzz.sound("audio/estudiar", {
    formats: ["mp3"]
}),caminar = new buzz.sound("audio/caminar", {
    formats: ["mp3"]
}),descansar = new buzz.sound("audio/descansar", {
    formats: ["mp3"]
}),hablar = new buzz.sound("audio/hablar", {
    formats: ["mp3"]
}),encontrarse = new buzz.sound("audio/encontrarse", {
    formats: ["mp3"]
}),desayunar = new buzz.sound("audio/desayunar", {
    formats: ["mp3"]
}),almorzar = new buzz.sound("audio/almorzar", {
    formats: ["mp3"]
}),cenar = new buzz.sound("audio/cenar", {
    formats: ["mp3"]
}),
////////
conmigo = new buzz.sound("audio/conmigo", {
    formats: ["mp3"]
}),contigo = new buzz.sound("audio/contigo", {
    formats: ["mp3"]
}),conElla = new buzz.sound("audio/conElla", {
    formats: ["mp3"]
}),conEl = new buzz.sound("audio/conEl", {
    formats: ["mp3"]
}),conNosotros = new buzz.sound("audio/conNosotros", {
    formats: ["mp3"]
}),conUstedes = new buzz.sound("audio/conUstedes", {
    formats: ["mp3"]
}),conNovia = new buzz.sound("audio/conNovia", {
    formats: ["mp3"]
}),conEsposa = new buzz.sound("audio/conEsposa", {
    formats: ["mp3"]
}),conNovio = new buzz.sound("audio/conNovio", {
    formats: ["mp3"]
}),conEsposo = new buzz.sound("audio/conEsposo", {
    formats: ["mp3"]
}),conFamilia = new buzz.sound("audio/conFamilia", {
    formats: ["mp3"]
}),conAmigos = new buzz.sound("audio/conAmigos", {
    formats: ["mp3"]
}),conHermano = new buzz.sound("audio/conHermano", {
    formats: ["mp3"]
}),conHermana = new buzz.sound("audio/conHermana", {
    formats: ["mp3"]
});
////////
enCiudad = new buzz.sound("audio/enCiudad", {
    formats: ["mp3"]
}),enCentro = new buzz.sound("audio/enCentro", {
    formats: ["mp3"]
}),enUcrania = new buzz.sound("audio/enUcrania", {
    formats: ["mp3"]
}),enCasa = new buzz.sound("audio/enCasa", {
    formats: ["mp3"]
}),enApartamento = new buzz.sound("audio/enApartamento", {
    formats: ["mp3"]
}),enOficina = new buzz.sound("audio/enOficina", {
    formats: ["mp3"]
}),enHotel = new buzz.sound("audio/enHotel", {
    formats: ["mp3"]
}),enEscuela = new buzz.sound("audio/enEscuela", {
    formats: ["mp3"]
}),enUniversidad = new buzz.sound("audio/enUniversidad", {
    formats: ["mp3"]
}),enParque = new buzz.sound("audio/enParque", {
    formats: ["mp3"]
}),afuera = new buzz.sound("audio/afuera", {
    formats: ["mp3"]
}),enNaturaleza = new buzz.sound("audio/enNaturaleza", {
    formats: ["mp3"]
}),enCafe = new buzz.sound("audio/enCafe", {
    formats: ["mp3"]
}),enRestaurant = new buzz.sound("audio/enRestaurant", {
    formats: ["mp3"]
}),enTerraza = new buzz.sound("audio/enTerraza", {
    formats: ["mp3"]
}),
/////////
verano = new buzz.sound("audio/verano", {
    formats: ["mp3"]
}),invierno = new buzz.sound("audio/invierno", {
    formats: ["mp3"]
}),primavera = new buzz.sound("audio/primavera", {
    formats: ["mp3"]
}),otono = new buzz.sound("audio/otono", {
    formats: ["mp3"]
}),ahora = new buzz.sound("audio/ahora", {
    formats: ["mp3"]
}),hoy = new buzz.sound("audio/hoy", {
    formats: ["mp3"]
}),manana = new buzz.sound("audio/manana", {
    formats: ["mp3"]
}),pasadoManana = new buzz.sound("audio/pasadoManana", {
    formats: ["mp3"]
}),finDeSemana = new buzz.sound("audio/finDeSemana", {
    formats: ["mp3"]
}),sabado = new buzz.sound("audio/sabado", {
    formats: ["mp3"]
}),enLaManana = new buzz.sound("audio/enLaManana", {
    formats: ["mp3"]
}),enLaTarde = new buzz.sound("audio/enLaTarde", {
    formats: ["mp3"]
}),enLaNoche = new buzz.sound("audio/enLaNoche", {
    formats: ["mp3"]
});
//arrays de sonidos

objSonidos1 = [
{id : 0, sonido: minieAmi},{id : 1, sonido: tibieAti},{id : 2, sonido: iemuAel},{id : 3, sonido: ieiAella},{id : 4, sonido: namAnos},{id : 5, sonido: bamAus},{id : 6, sonido: imAellos},
];

objSonidos2 = [{id : 0, sonido: gusta},{id : 1, sonido: quisiera},{id : 2, sonido: necesito}
];

objSonidos3 = [
{id: 0, sonido: vivir},{id: 1, sonido: trabajar},{id: 2, sonido: estudiar},{id: 3, sonido: caminar},{id: 4, sonido: descansar},{id: 5, sonido: hablar},{id: 6, sonido: encontrarse},{id: 7, sonido: desayunar},{id: 8, sonido: almorzar},{id: 9, sonido: cenar}
];

objSonidos4 = [
{id: 0, sonido: conmigo},{id: 1, sonido: contigo},{id: 2, sonido: conElla},{id: 3, sonido: conEl},{id: 4, sonido: conNosotros},{id: 5, sonido: conUstedes},{id: 6, sonido: conNovia},{id: 7, sonido: conEsposa},{id: 8, sonido: conNovio},{id: 9, sonido: conEsposo},{id: 10, sonido: conFamilia},{id: 11, sonido: conAmigos},{id: 12, sonido: conHermano},{id: 13, sonido: conHermana}
];

objSonidos5 = [
{id : 0, sonido: enCiudad},{id : 0, sonido: enCentro},{id : 0, sonido: enUcrania},{id : 0, sonido: enCasa},{id : 0, sonido: enApartamento},{id : 0, sonido: enOficina},{id : 0, sonido: enHotel},{id : 0, sonido: enEscuela},{id : 0, sonido: enUniversidad},{id : 0, sonido: enParque},{id : 0, sonido: afuera},{id : 0, sonido: enNaturaleza},{id : 0, sonido: enCafe},{id : 0, sonido: enRestaurant},{id : 0, sonido: enTerraza},
]

objSonidos6 = [
{id: 0, sonido:verano},{id: 0, sonido:invierno},{id: 0, sonido:primavera},{id: 0, sonido:otono},{id: 0, sonido:ahora},{id: 0, sonido:hoy},{id: 0, sonido:manana},{id: 0, sonido:pasadoManana},{id: 0, sonido:finDeSemana},{id: 0, sonido:sabado},{id: 0, sonido:enLaManana},{id: 0, sonido:enLaTarde},{id: 0, sonido:enLaNoche}
];

var frase1, frase2, frase3, frase4, frase5, frase6 = {};
var fraseFinal = [];

var playFrase = document.getElementById('oir');

var form1 = document.getElementById('formulario1');
var inp1 = document.getElementById('input1');
let outputBox1 = document.getElementById("output1");
//var btn1 = document.getElementById('btnQuien');
var arr1 = Array.from(form1[0].options);

var form2 = document.getElementById('formulario2');
var inp2 = document.getElementById('input2');
let outputBox2 = document.getElementById('output2')

var form3 = document.getElementById('formulario3');
var inp3 = document.getElementById('input3');
let outputBox3 = document.getElementById('output3')

var form4 = document.getElementById('formulario4');
var inp4 = document.getElementById('input4');
let outputBox4 = document.getElementById('output4')

var form5 = document.getElementById('formulario5');
var inp5 = document.getElementById('input5');
let outputBox5 = document.getElementById('output5')

var form6 = document.getElementById('formulario6');
var inp6 = document.getElementById('input6');
let outputBox6 = document.getElementById('output6')

////////////////////FIN VARIABLES /////////////////

if (!buzz.isSupported()) {
    alert("Your browser is too old and does not support buzz.js audio library, time to update!");
}

if (!buzz.isMP3Supported()) {
    alert("Your browser doesn't support MP3 Format.");
}

function getData1(){

    let collection1 = quien.selectedOptions;
    //console.log('collection: ', collection1);
    let output = collection1[0].label;
    //console.log('output: ', output);
    //console.log('length: ', collection1.length);

    if (output === "") {
        output = "Selecciona algúna opción";
    }
    outputBox1.innerHTML = output;
    //console.log('index: ', collection1.selectedIndex);

    let val1 = collection1[0].value;

    //console.log('form1: ', form1);
    //console.log('value1: ', val1);

    for(let i = 0; i < objSonidos1.length; i++){
        //console.log('sonido: ', i, objSonidos1[i]);
        if( i == val1){
            frase1 = objSonidos1[i].sonido;
            fraseFinal[0] = frase1;
            objSonidos1[i].sonido.play();
            
        }
    }
}


function getData2(){
    //console.log('index: ', form2.selectedIndex);

    let collection2 = que.selectedOptions;
    //console.log('collection: ', collection2);
    let output = collection2[0].label;
    //console.log('output: ', output);
    //console.log('length: ', collection2.length);

    if (output === "") {
        output = "Selecciona algúna opción";
    }
    outputBox2.innerHTML = output;
    let val2 = collection2[0].value;
    //console.log('value2: ', val2);

    //SONIDOS
    for(let i = 0; i < objSonidos2.length; i++){
        //console.log('sonido: ', i);
        if( i == val2){
            frase2 = objSonidos2[i].sonido;
            fraseFinal[1] = frase2;
            objSonidos2[i].sonido.play();
           
        }
    }
}//getData2

function getData3(){
    //console.log('index: ', form3.selectedIndex);

    let collection3 = queHacer.selectedOptions;
    //console.log('collection: ', collection3);
    let output = collection3[0].label;
    //console.log('output: ', output);
    //console.log('length: ', collection3.length);

    if (output === "") {
        output = "Selecciona algúna opción";
    }
    outputBox3.innerHTML = output;
    let val3 = collection3[0].value;
    //console.log('value3: ', val3);

    //SONIDOS
    for(let i = 0; i < objSonidos3.length; i++){
        //console.log('sonido: ', i);
        if( i == val3){
            frase3 = objSonidos3[i].sonido;
            fraseFinal[2] = frase3;
            objSonidos3[i].sonido.play();
           
        }
    }
}

function getData4(){
    //console.log('index: ', form4.selectedIndex);

    let collection4 = conQuien.selectedOptions;
    //console.log('collection: ', collection4);
    let output = collection4[0].label;
    //console.log('output: ', output);
    //console.log('length: ', collection4.length);

    if (output === "") {
        output = "Selecciona algúna opción";
    }
    outputBox4.innerHTML = output;
    let val4 = collection4[0].value;
    //console.log('value4: ', val4);

    //SONIDOS
    for(let i = 0; i < objSonidos4.length; i++){
        //console.log('sonido: ', i);
        if( i == val4){
            frase4 = objSonidos4[i].sonido;
            fraseFinal[3] = frase4;
            objSonidos4[i].sonido.play();
            
        }
    }
}

function getData5(){
    //console.log('index: ', form5.selectedIndex);

    let collection5 = donde.selectedOptions;
    //console.log('collection: ', collection5);
    let output = collection5[0].label;
    //console.log('output: ', output);
    //console.log('length: ', collection5.length);

    if (output === "") {
        output = "Selecciona algúna opción";
    }
    outputBox5.innerHTML = output;
    let val5 = collection5[0].value;
    //console.log('value5: ', val5);

    //SONIDOS
    for(let i = 0; i < objSonidos5.length; i++){
        //console.log('sonido: ', i);
        if( i == val5){
            frase5 = objSonidos5[i].sonido;
            fraseFinal[4] = frase5;
            objSonidos5[i].sonido.play();
         
        }
    }
}

function getData6(){
    //console.log('index: ', form6.selectedIndex);

    let collection6 = cuando.selectedOptions;
    //console.log('collection: ', collection6);
    let output = collection6[0].label;
    //console.log('output: ', output);
    //console.log('length: ', collection6.length);

    if (output === "") {
        output = "Selecciona algúna opción";
    }
    outputBox6.innerHTML = output;
    let val6 = collection6[0].value;
    //console.log('value6: ', val6);

    //SONIDOS
    for(let i = 0; i < objSonidos6.length; i++){
        //console.log('sonido: ', i);
        if( i == val6){
            frase6 = objSonidos6[i].sonido;
            fraseFinal[5] = frase6;
            objSonidos6[i].sonido.play();
            
        //console.log('frase6 type: ', typeof(frase6));
        }
    }
}




function fraseCompleta(){
    
    var i=0;
    if( !frase1 || !frase2 || !frase3 || !frase4 || !frase5 || !frase6){
            console.log('faltan palabras');
            alert("Completa la frase. Selecciona una opción para cada campo.");
            //var popover = new bootstrap.Popover(playFrase, { content: 'hola', trigger: 'hover', placement: 'bottom'} );
        }else{//
                //hailitar botón
              var finalPhrase = setInterval(triggerSound, 1400);  

            

            function triggerSound(){
                fraseFinal[i].play();
                i++;
                if(i >= fraseFinal.length){
                    clearInterval(finalPhrase);
                    console.log('terminado');
                }
            }
        
          
        }

}
    
