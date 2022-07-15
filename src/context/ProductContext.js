import { createContext, useState } from 'react';
import tazaAmor from '../imgBarronativo2/tazasMod/amor2Mod.jpg'
import tazaCalma from '../imgBarronativo2/tazasMod/calmaMod.jpg'
import tazaEmpatia from '../imgBarronativo2/tazasMod/empatiaMod.jpg'
import cuencoPaz from '../imgBarronativo2/cuencosMod/pazMod.jpg'
import cuencoAmor from '../imgBarronativo2/cuencosMod/amorMod.jpg'
import cuencoVida from '../imgBarronativo2/cuencosMod/vidaMod.jpg'
import mateCalma from '../imgBarronativo2/matesMod/calmaMod.jpg'
import mateLibertad from '../imgBarronativo2/matesMod/libertadMod.jpg'
import matePureza from '../imgBarronativo2/matesMod/purezaMod.jpg'
import mateEmpatia from '../imgBarronativo2/matesMod/empatiaMod.jpg'

export const ProductsContext = createContext();
const productsState = [
    { id: 1, producto: "TAZA", linea: "Linea AMOR", imagen: tazaAmor, capacidad: "250ml", precio: 580 },
    { id: 2, producto: "TAZA", linea: "Linea CALMA", imagen: tazaCalma, capacidad: "250ml", precio: 680 },
    { id: 3, producto: "TAZA", linea: "Linea EMPATIA", imagen: tazaEmpatia, capacidad: "250ml", precio: 650 },


    { id: 4, producto: "CUENCO", linea: "Linea PAZ", imagen: cuencoPaz, capacidad: "mediano 12cm x 7cm", precio: 880 },
    { id: 5, producto: "CUENCO", linea: "Linea AMOR", imagen: cuencoAmor, capacidad: "mediano 12cm x 7cm", precio: 880 },
    { id: 6, producto: "CUENCO", linea: "Linea VIDA", imagen: cuencoVida, capacidad: "mediano 12cm x 7cm", precio: 880 },


    { id: 7, producto: "MATE", linea: "Linea CALMA", imagen: mateCalma, capacidad: "250ml", precio: 880 },
    { id: 8, producto: "MATE", linea: "Linea LIBERTAD", imagen: mateLibertad, capacidad: "250ml", precio: 700 },
    { id: 9, producto: "MATE", linea: "Linea PUREZA", imagen: matePureza, capacidad: "250ml", precio: 750 },
    { id: 10, producto: "MATE", linea: "Linea EMPATIA", imagen: mateEmpatia, capacidad: "250ml", precio: 790 }
]


export const getProductos = new Promise((resuelto, rechazado) => {
    let condicion = true;
    if (condicion) {
        setTimeout(() => {
            resuelto(productsState)
        }, 2000)
    } else {
        rechazado("400 not found")
    }
})

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState(getProductos)

    return(
        <ProductsContext.Provider value={[product, setProduct]}>
            {children}
        </ProductsContext.Provider>
    )
}