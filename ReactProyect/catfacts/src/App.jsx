import React from 'react';
import './App.css'
import {Button} from "./components/boton";
import {useCat} from "./components/useCat";
import {useFact} from "./components/useFacts";

function App() {
  const {cat, fetchCats}= useCat('https://api.thecatapi.com/v1/images/search');
  const {fact, fetchFact}= useFact('https://catfact.ninja/fact');

    const handleClick = () => {
      fetchCats();
      fetchFact();

    };

  return (
      <div className="App">
        <h1>GATTI CARINI</h1>
        <div className="imaggini_miau">
        {cat?.map((cat) => <img src={cat.url} key={cat.id} alt="" />)}
        </div>
        <p className="fact_miau0">{fact}</p>
      <div>
      <Button onClick={handleClick} text="ricaricare" />
      <p className="footer"><i>By Joaco</i></p>
        </div>
      </div>
  );
}

export default App;
