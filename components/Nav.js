import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 100;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.activeElement.blur()
  };

  return (
    <nav className="burger-menu" lang='ar' dir='rtl'>
    
      <button
        onClick={handleClick}
        className={`burger-menu__button ${isOpen ? 'active' : ''}`}
        tabIndex='-1'
        
      >
        <span className="burger-menu__icon">
          <span className="burger-menu__line" />
          <span className="burger-menu__line" />
          <span className="burger-menu__line" />
        </span>

        <Transition in={isOpen} timeout={duration}>
        {(state) => (
         

          
            <div
                className="burger-menu__items"
                style={{
                ...defaultStyle,
                ...transitionStyles[state],
                }}
            >
                <a href="#" className="burger-menu__item">
                الرئيسية
                </a>
                <a href="#" className="burger-menu__item">
                الرئيسية
                </a>
                <a href="#" className="burger-menu__item">
                الرئيسية
                </a>
            </div>
          
        )}
      </Transition>
      </button>

      <h1>المتأصلة </h1>

      
    </nav>
  );
}

export default BurgerMenu;