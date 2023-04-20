// import React, { useState,useRef } from 'react';
// import { Transition } from 'react-transition-group';

// const duration = 100;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// };

// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered: { opacity: 1 },
// };

// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const nodeRef = useRef(null)

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//     document.activeElement.blur()
//   };

//   return (
//     <nav className="burger-menu" lang='ar' dir='rtl'>
    
//       <button
//         onClick={handleClick}
//         className={`burger-menu__button ${isOpen ? 'active' : ''}`}
//         tabIndex='-1'
        
//       >
//         <span className="burger-menu__icon">
//           <span className="burger-menu__line" />
//           <span className="burger-menu__line" />
//           <span className="burger-menu__line" />
//         </span>
// </button>
//         <Transition in={isOpen} timeout={duration} nodeRef={nodeRef}>
//         {(state) => (
         

          
//             <div
//                 className="burger-menu__items"
//                 style={{
//                 ...defaultStyle,
//                 ...transitionStyles[state],
//                 }}
//             >
//                 <a href="#a" className="burger-menu__item">
//                 الرئيسية
//                 </a>
//                 <a href="#b" className="burger-menu__item">
//                 استخداماته
//                 </a>
//                 <a href="#c" className="burger-menu__item">
//                 ادوات
//                 </a>
//             </div>
          
//         )}
//       </Transition>
      

//       <h1>المتأصلة </h1>

      
//     </nav>
//   );
// }

// export default BurgerMenu;


import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';



function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.activeElement.blur()
    
  };

  return (
    <nav className="burger-menu" lang="ar" dir="rtl">
      <button className={`btn-nav ${isOpen ? 'act':''}`}onClick={handleClick}>
        <span className='logo'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </span>
        
      </button>
      {isOpen && <div className='nav-it'>
        <a href="#a">نبذة</a>
        <a href="#b">استخدامات</a>
        <a href="#c">ادوات</a>
      </div>}

      
      
      <h1>
        
          <a>المتأصلة</a>
        
      </h1>
    </nav>
  );
}

export default BurgerMenu;

