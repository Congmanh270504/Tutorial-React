import React, { useState } from 'react';
import './App.css';
import User from './component/User';
function App() {
  const [userInfo, updateData] = useState({
    name: 'App',
    age: 0,
  });

  return (
    <>
      <User updateData={updateData} />
      <br />
      <p>My name is: {userInfo.name}</p>
      <p>My age is: {userInfo.age}</p>
    </>
  );
}

export default App;