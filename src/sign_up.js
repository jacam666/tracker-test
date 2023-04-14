import React, { useState } from 'react';

const SignUpForm = () => {
  // State to store form data
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
    });

  // Handler for form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to handle form submission
    console.log('Form submitted:', formData);
    }

  // Handler for form input changes
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    }

    return (
    <form className='form-container' onSubmit={handleSubmit}>
    <input className='firstName-input'
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        />
        <input className='lastName-input'
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
    />
        <input className='email-input'
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
    />
        <input className='password-input'
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        />
        <button className='submit-button' type="submit">Sign Up</button>
    </form>
    );
};

export default SignUpForm;