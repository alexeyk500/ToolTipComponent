import React from 'react';
import classes from './App.module.css';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <span data-hint="Я подсказка">
          <ButtonComponent />
        </span>
      </div>
    </div>
  );
}

export default App;
