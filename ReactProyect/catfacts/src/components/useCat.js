import { useState, useEffect } from "react";

export function useCat(url) {
    const [cat, setCat] = useState([]);

    const fetchCats = () => {
        fetch(url)
        .then(response => {//Err API
            if (!response.ok) {
              throw new Error('No Hubo Respuesta Por Parte de La API.');
            }
            return response.json();
          })
        .then(data => {
            setCat(data);
        })
        .catch(error => {//Fallos img cats
            console.error('Error: CAT FETCHING', error);
        });
    };
    
    useEffect(() => {
        fetchCats();
    }, [url]);
    return {cat, fetchCats};
}