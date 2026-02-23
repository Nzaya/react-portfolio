import React from 'react';

const CTA = ({ setPrefillMessage }) => {

  const handleRequestCV = () => {
    console.log('Request CV clicked');

    setPrefillMessage(
      'Hello, I have reviewed your profile and I would like to request a copy of your CV. Thank you.'
    );
  };

  const handleLetsTalk = () => {
    console.log("Let's Talk clicked");

    // Clear any previous message
    setPrefillMessage('');
  };

  return (
    <div className="cta">

      {/* Request CV Button */}
      <a
        href="#contact"
        className="btn"
        onClick={handleRequestCV}
      >
        Request CV
      </a>

      {/* Let's Talk Button */}
      <a
        href="#contact"
        className="btn btn-primary"
        onClick={handleLetsTalk}
      >
        Let's Talk
      </a>

    </div>
  );
};

export default CTA;