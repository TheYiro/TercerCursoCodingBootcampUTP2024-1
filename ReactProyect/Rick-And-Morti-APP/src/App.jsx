import React from 'react';
import CharacterTable from './components/CharacterTable';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <CharacterTable />
      <a href='https://github.com/TheYiro' className='joaco'><h5><i>By: Joaco </i></h5></a>
    </div>
  );
};

export default App;
