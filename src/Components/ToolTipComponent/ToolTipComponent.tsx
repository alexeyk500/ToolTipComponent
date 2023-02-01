import React, { ReactElement, useRef, useState } from 'react';
import classes from './ToolTipComponent.module.css';

type PropsType = {
  children: ReactElement;
  text: string;
  customClass?: string;
};

const ToolTipComponent: React.FC<PropsType> = ({ children, text, customClass }) => {
  const refSetTimeout = useRef<NodeJS.Timeout>();
  const [showToolTip, setShowToolTip] = useState(false);
  let toolTipClasses = customClass ? `${classes.tooltip} ${customClass}` : `${classes.tooltip}`;

  const onMouseEnterHandler = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 750);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };

  return (
    <div className={classes.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && <div className={toolTipClasses}>{text}</div>}
    </div>
  );
};

export default ToolTipComponent;
