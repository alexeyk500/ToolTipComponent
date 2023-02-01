import React, { ReactElement, useRef, useState } from 'react';
import classes from './ToolTipComponent.module.css';
import { CSSTransition } from 'react-transition-group';

type PropsType = {
  children: ReactElement;
  text: string;
  customClass?: string;
};

const transitionClasses = {
  enter: classes.exampleEnter,
  enterActive: classes.exampleEnterActive,
  exit: classes.exampleExit,
  exitActive: classes.exampleExitActive,
};

const ToolTipComponent: React.FC<PropsType> = ({ children, text, customClass }) => {
  const refSetTimeout = useRef<NodeJS.Timeout>();
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipClasses = customClass ? `${classes.tooltip} ${customClass}` : `${classes.tooltip}`;

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
      <CSSTransition in={showToolTip} timeout={750} classNames={transitionClasses} unmountOnExit>
        <div className={toolTipClasses}>{text}</div>
      </CSSTransition>
    </div>
  );
};

export default ToolTipComponent;
