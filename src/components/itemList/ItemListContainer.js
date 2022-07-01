import './itemListContainer.css';
// import tazaAmor from '../../imgBarronativo2/tazasMod/amor2Mod.jpg'
// import tazaCalma from '../../imgBarronativo2/tazasMod/calmaMod.jpg'
// import tazaEmpatia from '../../imgBarronativo2/tazasMod/empatiaMod.jpg'
// import cuencoPaz from '../../imgBarronativo2/cuencosMod/pazMod.jpg'
// import cuencoAmor from '../../imgBarronativo2/cuencosMod/amorMod.jpg'
// import cuencoVida from '../../imgBarronativo2/cuencosMod/vidaMod.jpg'
// import mateCalma from '../../imgBarronativo2/matesMod/calmaMod.jpg'
// import mateLibertad from '../../imgBarronativo2/matesMod/libertadMod.jpg'
// import matePureza from '../../imgBarronativo2/matesMod/purezaMod.jpg'
// import mateEmpatia from '../../imgBarronativo2/matesMod/empatiaMod.jpg'

let productos = [
  {id:1, producto: "TAZA", linea: "Linea AMOR", imagen:"./src/imgBarronativo2/tazasMod/amor2Mod.jpg", capacidad: "250ml", precio: 580},
  {id:2, producto: "TAZA", linea: "Linea CALMA", imagen:"./src/imgBarronativo2/tazasMod/calmaMod.jpg", capacidad:"250ml", precio: 680},
  {id:3, producto: "TAZA", linea: "Linea EMPATIA", imagen:"./src/imgBarronativo2/tazasMod/empatiaMod.jpg", capacidad:"250ml", precio: 650},


  {id:4, producto: "CUENCO", linea: "Linea PAZ", imagen:"./src/imgBarronativo2/cuencosMod/pazMod.jpg", capacidad: "mediano 12cm x 7cm", precio: 880},
  {id:5, producto: "CUENCO", linea: "Linea AMOR", imagen:"./src/imgBarronativo2/cuencosMod/amorMod.jpg", capacidad: "mediano 12cm x 7cm", precio: 880},
  {id:6, producto: "CUENCO", linea: "Linea VIDA", imagen:"./src/imgBarronativo2/cuencosMod/vidaMod.jpg", capacidad: "mediano 12cm x 7cm", precio: 880},


  {id:7, producto: "MATE", linea: "Linea CALMA", imagen:"./src/imgBarronativo2/matesMod/calmaMod.jpg",capacidad: "250ml", precio: 880},
  {id:8, producto: "MATE", linea: "Linea LIBERTAD", imagen:"./src/imgBarronativo2/matesMod/libertadMod.jpg",capacidad: "250ml", precio: 700},
  {id:9, producto: "MATE", linea: "Linea PUREZA", imagen:"./src/imgBarronativo2/matesMod/purezaMod.jpg",capacidad: "250ml", precio: 750},
  {id:10, producto: "MATE", linea: "Linea EMPATIA", imagen:"./src/imgBarronativo2/matesMod/empatiaMod.jpg",capacidad: "250ml", precio: 790}
]

export const getProductos = new Promise((resuelto, rechazado) => {
  let condicion = true;
  if(condicion){
      setTimeout(()=>{
          resuelto(productos)
      }, 2000)
  }else{
    rechazado("400 not found")
  }
})