import { useState, useEffect } from "react";

export function useFact(url) {
    const [fact, setFact] = useState("");

    const fetchFact = () => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No hubo respuesta por parte de la API');
        }
        return response.json();
    })
    .then(data => { //Retrno inicial de la primer palabra con FACT
        setFact(data.fact.split(" ")[0]);
        console.log(data.fact) //Retorno de FACT completo en consola
    })
    .catch(error => { //Manejo errores de imagenes cats
        console.error('Error: FETCH FACT', error); 
    });
    };
    useEffect(() => {
        fetchFact();
        }, [url]);

        return {fact, fetchFact};
    }