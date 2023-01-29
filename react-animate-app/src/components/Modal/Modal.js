import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 800,
    exit: 1000
};

const modal = (props) => {

    return (
        <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'modalIsOpen',
                exit: '',
                exitActive: 'modalIsClosed',
                // appear:,
                // appearActive:
            }}>
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );
};

export default modal;