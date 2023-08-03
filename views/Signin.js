import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();


function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Handle successful sign-in, e.g., redirect to new pages
      setSuccessMessage('Sign in successful');
      navigate('/home');
    } catch (error) {
      // Handle sign-in error, e.g., display error message
      setErrorMessage('Email or password does not exist');
    }
  };

  


return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4">Sign in </h2>
      {errorMessage && (
        <div className="text-red-500 mb-4">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-500 mb-4">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}


export default SignInForm;
