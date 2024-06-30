import React, { useState } from 'react';
import './App.css';
import User from './component/User';
import ListUser from './component/ListUser';
function App() {
  const [userInfo, updateData] = useState([{
    id: 1,
    name: 'User 1',
    age: 0,
  }, {
    id: 2,
    name: 'User 2',
    age: 10,
  }, {
    id: 3,
    name: 'User 3',
    age: 20,
  }, {
    id: 4,
    name: 'User 4',
    age: 30,
  }]);
  const addUser = (obj) => {
    updateData([obj, ...userInfo]) // add user 
  }
  const deleteUser = (id) => { // lấy cái id của ng dùng click vô 
    let tmp = userInfo
    tmp = tmp.filter(user => user.id !== id) // tạo biến tmp để lưu lại giá trị userInfo sau đó filter, n~ cái user.id nào khác id với id user thì giữ ko thì vứt 
    updateData(tmp)
  }
  return (
    <>
      <User addUser={addUser} />
      <br />
      <ListUser userInfo={userInfo} deleteUser={deleteUser} />
    </>
  );
}

export default App;