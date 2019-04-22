/* Iteracion 1 | El objeto Rover */

var rover = { direccion:'N', posicion: [0,0]  }; 

function encendido(){
  console.log("Hola el Rover esta encendido y listo para operar");
  console.log(" Me encuentro en la coordenada (0,0) direccion N");
 }

/* Iteracion 2 |Girando el Rover */

function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direccion){
    case 'N':
    rover.direccion = 'W';
    break;
    case 'W':
    rover.direccion = 'S';
    break;
    case 'S':
    rover.direccion = 'E';
    break;
    case 'E':
    rover.direccion = 'N';
    break;
  }
}

function turnRight(){
  console.log("turnRight was called!");
  switch(rover.direccion){
    case 'N':
    rover.direccion = 'E';
    break;
    case 'E':
    rover.direccion = 'S';
    break;
    case 'S':
    rover.direccion = 'W';
    break;
    case 'W':
    rover.direccion = 'N';
    break;
  }
}
/* Iteracion 3  Mover el Rover*/

var mapa = [
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
];

function moveForward(){
  console.log("moveForward was called");
  switch(rover.direccion){
  case 'w':
  rover.posicion[0] = rover.posicion[0]-1;
  break;
  case 'N':
  rover.posicion[0] = rover.posicion[0]-1;
  break;
  case 'S':
  rover.posicion[1] = rover.posicion[0]+1;
  break;
  case 'E':
  rover.posicion[1] = rover.posicion[0]+1;
  break; 
  }
}
/* Iteracion 4 | Comandos */

function comando(comandos){
  
  for ( i = 0; i < comandos.length; i++){
   switch(comandos[i]){
    case 'f':
    moveForward();
    break;
    case 'r':
    turnRight();
    break;
    case 'l':
    turnLeft();
    break;
    default :       /* Bonus | Otras caracteristicas sugeridas | Validar entradas */
    moveForward();
    moveForward();
    break;
   }
  }
}
/* Iteracion 5| Rastreo */


function travelLog(coordenadas){
  var coordenadas = [];
  coordenadas.push(rover.position);
}
/* Bonus | Hacer cumplir los limites */

function diezXDiez(){
  if (rover.direccion[0] >= [9]){
    console.log(" Llegaste al limite del mapa, retrocede!")
   } 
  }

/* Bonus | Otras caracteristicas sugeridas */

function moveBackwards(){
  console.log("moveBackwards was called");
    switch(rover.direccion){
    case 'w':
    rover.posicion[0] = rover.posicion[0]+1; /* Duda si esta correcto la suma o resta por ser arrays*/
    break;
    case 'N':
    rover.posicion[0] = rover.posicion[0]+1;
    break;
    case 'S':
    rover.posicion[1] = rover.posicion[0]-1;
    break;
    case 'E':
    rover.posicion[1] = rover.posicion[0]-1;
    break; 
    }
}

/* Pruebas */


encendido(rover);
turnLeft(rover);
turnRight(rover);
moveForward(rover);
comando('rffrfflfrff');
travelLog(rover); 
diezXDiez(rover);
moveBackwards(rover);
comando('ffzzy');
