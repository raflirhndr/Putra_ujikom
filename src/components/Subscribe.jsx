import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (  
    <div className='caard'>
      <h2 style={{margin: "100px"}}>Subscribe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm
