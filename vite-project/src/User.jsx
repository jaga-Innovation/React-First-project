/* eslint-disable react/prop-types */

// import React from 'react'

const User = ({ name, age, MobileNo }) => {
  return (
    <div>
      <h1>name = {name}</h1>
      <h2>Age= {age}</h2>
      <h2>Mobile number = {MobileNo}</h2>
    </div>
  );
};

export default User;
