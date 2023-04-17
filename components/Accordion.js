import { useState } from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
      setIsOpen(!isOpen);
    }
  
    return (
      <div>
        <button className='acc-title' onClick={handleClick}>{`${title}`} <span style={{marginRight:'12px'}}>{isOpen?<FontAwesomeIcon style={{color:'#26a69a'}} icon={faAngleUp} />:<FontAwesomeIcon style={{color:'#26a69a'}} icon={faAngleDown} />}</span></button>
        
        {isOpen && <div className='acc-body'><p>{content}</p></div>}
      </div>
    );
}

export default Accordion