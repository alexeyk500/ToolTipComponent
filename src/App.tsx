import React from 'react';
import classes from './App.module.css';
import ToolTipComponent from './Components/ToolTipComponent/ToolTipComponent';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';

function App() {
  return (
    <div className={classes.container}>
      <ToolTipComponent text={'Я подсказка'} customClass={classes.toolTipCustom}>
        <ButtonComponent />
      </ToolTipComponent>
      <div className={classes.buttonContainer}>
        <span data-hint="Я подсказка">
          <ButtonComponent />
        </span>
      </div>
    </div>
  );
}

export default App;
