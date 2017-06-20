import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {
  return (
    <div>
      <p>Hello, {currentUser.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const sessionLinks = () => {
  return (
    <div>
      <Link to='/signup'>Signup</Link>
      <br/>
      <Link to='/login'>Login</Link>
    </div>
  );
};

const Greeting = ({ currentUser, logout }) => {
  return (
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  );
};

export default Greeting;
