import React from 'react';
import '../css/footer.css'

const Footer = ({jugarDenuevo}) => {
  return (
    <div className='retry'>
      <div>
        <button onClick={jugarDenuevo}>Juguemos denuevo!!</button>
      </div>
    </div>
  );
}

export default Footer;
