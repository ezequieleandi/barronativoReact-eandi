import { createContext, useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const HomeContext = createContext();

export const HomeProvider = ({children}) => {
    const [id, setId] = useState([]);
    const [question, setQuestion] = useState([]);

    const generateQuestion = () => {
        const id = {
            nombre: question.nombre,
            correo: question.correo,
            telefono: question.telefono,
            pregunta: question.pregunta,
        };
        const db = getFirestore();
        const queryInsert = collection(db, "preguntas");
        addDoc(queryInsert, id)
          .then((resp) => {
            setId([resp.id]);
          })
          .catch((err) => console.log(err))
      };

    return(
        <HomeContext.Provider value={{generateQuestion, setQuestion, question, id}}>
            {children}
        </HomeContext.Provider>
    )
}