import React from 'react';
import classes from './ButtonComponent.module.css';

const ButtonComponent: React.FC = () => {
  return (
    <div className={classes.container}>
      Нажми на меня
    </div>
  );
};

export default ButtonComponent;
