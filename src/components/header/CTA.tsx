import React from 'react';
//@ts-ignore
import Resume from '../../assets/Sayed_Mubashir_Ali_Resume.pdf';

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <a href={Resume} download className='btn'>Download CV</a>
      <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  );
}

export default CTA;
