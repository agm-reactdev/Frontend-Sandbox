import  { useState } from 'react';

 function Formvalidation() {
  // 1. Name aur Email ke liye ALAG ALAG inputs state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // 2. Name aur Email ke liye ALAG ALAG errors state
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // 1. Name Check (Minimum 6 characters)
    if (name.trim() === '') {
      setNameError('Name zaroori hai!');
      isValid = false;
    } else if (name.trim().length < 6) {
      setNameError('Name kam se kam 6 characters ka hona chahiye!');
      isValid = false;
    } else {
      setNameError('');
    }

    // 2. Email Check (Minimum 8 characters & '@' requirement)
    if (email.trim() === '') {
      setEmailError('Email zaroori hai!');
      isValid = false;
    } else if (!email.includes('@')) {
      setEmailError('Email me @ hona zaroori hai!');
      isValid = false;
    } else if (email.trim().length < 8) {
      setEmailError('Email kam se kam 8 characters ki honi chahiye!');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      alert('Form Successfully Submitted!');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow border border-slate-200 mt-50">
        
        <h1 className='text-3xl text-center mb-4 mt-4'>Register Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full border p-2 rounded-lg outline-none focus:border-indigo-500"
          />
          {nameError ? <p className="text-red-500 text-xs mt-1">{nameError}</p> : null}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full border p-2 rounded-lg outline-none focus:border-indigo-500"
          />
          {emailError ? <p className="text-red-500 text-xs mt-1">{emailError}</p> : null}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}


export default Formvalidation;