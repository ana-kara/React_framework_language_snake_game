import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../firebase';
import { ref, push, update, get } from 'firebase/database';
import { getAuth,createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
const auth = getAuth();

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
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

    // Check if username or email already exists in Firebase
    const usersRef = ref(database, 'users');
    const querySnapshot = await get(usersRef);
    let isUsernameTaken = false;
    let isEmailTaken = false;

    querySnapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      if (childData.username === formData.username) {
        isUsernameTaken = true;
      }
      if (childData.email === formData.email) {
        isEmailTaken = true;
      }
    });

    if (isUsernameTaken) {
      setErrorMessage('Username already exists');
    } else if (isEmailTaken) {
      setErrorMessage('Email already exists');
    } else {
      try {
        // Create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        // Send email verification
        await sendEmailVerification(user);

        // Save user data to the database
        const newPostKey = push(usersRef).key;
        const updates = {};
        updates[newPostKey] = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };
        await update(usersRef, updates);

        setSuccessMessage('Verification email has been sent!');
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
      {errorMessage && (
        <div className="text-red-500 mb-4">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-500 mb-4">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
            placeholder="Enter your username"
            required
          />
        </div>
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
          Register
        </button>
      </form>
      <p>
                        Already registered?&nbsp; 
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#" onClick={() => navigate('/signin')}>Sign In</a>
                        </span>
                    </p>
    </div>
  );
}

export default Registration;


