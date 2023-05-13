import React, { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mobposition, setMobposition] = useState({ x: 0, y: 0 });
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);
  function moveBox(direction) {
    switch (direction) {
      case 'up':
        setPosition({ ...position, y: position.y - 50 });
        break;
      case 'down':
        setPosition({ ...position, y: position.y + 50 });
        break;
      case 'left':
        setPosition({ ...position, x: position.x - 50 });
        break;
      case 'right':
        setPosition({ ...position, x: position.x + 50 });
        break;
      default:
        break;
    }
  }

  return (
    <div className="main_container">
      <button className="horizontal" onClick={() => moveBox('up')} disabled={position.y === 0}>
        Up
      </button>
      <div className="container">
      <button className="vertical" onClick={() => moveBox('left')} disabled={position.x === 0}>
        Left
      </button>
      <div className="main">
          <div
            className="box"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ></div>
        </div>
        <button className="vertical" onClick={() => moveBox('right')} disabled={position.x === 450}>
          Right
        </button>
      </div>
      <button className="horizontal"  onClick={() => moveBox('down')} disabled={position.y === 450}>
        Bottom
      </button>

      </div>

  );
}

export default App;
