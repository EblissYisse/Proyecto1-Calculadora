
//Construiremos la API y la logica de negocios en este index
//Paso 1: Crear un objeto que represente a la biblioteca express

const express=require('express'); //objeto que representa la biblioteca express

//paso 2: Crear un objeto que represente nuesra aplicacion 

const app= express(); //representa una aplicacion creada apartir de la biblioteca express

app.use(express.json());//le decimos que la app pueda intepretar las peticiones en formato json

//DEBEMOS CONFIGURAR EL CORS, se puede hacer ruta por ruta o de entrada para todas
//"*" dejar el acceso publico 
app.use( function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
}
);

//Definir los entry point (puntos de entrada a la API), 
//En node estos puntos de entrada se denomina definir la ruta, la URL en donde va a responder la API
//Metodo: forma en que un cliente le envia datos a un servidor.
//http://localhost:3002/api/sumar

app.post(
    '/api/sumar',
    //se requieren dos objetos, 1 representando la peticion (req) y otro un objeto representando la respuesta(rest)
    (req, res)=>{
        //to do: aqui va el procesamiento de la peticion a esta ruta
        console.log("Alguien esta conetandose a esta ruta");
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1) + parseFloat(numero_2);
        res.json(resultado);
    }
);
//Crear otra ruta
//para reconocer el metodo post debemos utlizar una herramienta en java o utlizar insomnia o postaman
app.post(
    '/restar',
    (req, res)=>{
        // 1 forma de hacerlo mas facil: deconstruccion de un objeto en json
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1 - numero_2;
        res.json(resultado);

        //creamos el algoritmo para que reste los numeros
        /*const n1= req.body.numero_1;
        const n2= req.body.numero_2;
        const resultado=n1 - n2;
        res.json(resultado);
        */
    }
);

app.post(
    '/dividir',
    (req,res)=>{
        let resultado;

        try{
            const {numero_1, numero_2}= req.body;
            resultado=numero_1/numero_2;
        }catch(error){
            //gestionar el error
            resultado=error;
        }

        res.json(resultado);

    }
)
//paso 3: Crear un servidor o un servicio para escuchar peticiones mediante express

//metodo listen tiene dos argumentos o parametros, el 1 es el puerto donde quiero escuchar esas peticiones, el 2 es el hostname: nombre de dominio
app.listen(
    3002,
    //funcion de colback: tiene un formato tipo flecha, tambien puede ser anonima
    ()=>{
      console.log("Servidor ejecutandose en el puerto 3002");

    }

)

/*Taller: Como crear una ruta que yo 
le pueda pasar un numero indeterminado de datos
*/