import React from 'react';

const CTA = () => {

  const handleRequestCV = () => {
    console.log('Request CV button clicked');

    localStorage.setItem('fromRequestCV', 'true');

    localStorage.setItem(
      'prefillMessage',
      'Hello, I have reviewed your profile and I would like to request a copy of your CV. Thank you.'
    );

    console.log('Saved in localStorage:', {
      fromRequestCV: localStorage.getItem('fromRequestCV'),
      prefillMessage: localStorage.getItem('prefillMessage')
    });
  };

  return (
    <div className='cta'>

      <a
        href="#contact"
        className="btn"
        onClick={handleRequestCV}
      >
        Request CV
      </a>

      <a href="#contact" className='btn btn-primary'>
        Let's Talk
      </a>

    </div>
  );
};

export default CTA;