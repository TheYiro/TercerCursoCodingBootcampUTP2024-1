import React from 'react';
import '../styles/Screen.css'

function Screen({ count }) {
  return (
    <div className="screen">
      <p>{count}</p>
    </div>
  );
}

export default Screen;
