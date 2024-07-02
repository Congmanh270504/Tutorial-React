import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Amin from './component/admin';
import User from './component/user';
import Home from './component/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode> is a wrapper component that checks for potential problems in an application. 
  // nó console.log ra 2 lần
  <>
    <BrowserRouter>
      {/* bao tụi này lại với cái đường dẫn thích tên gì cx đc và truyền cái element là cái tên của component */}
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/admins" element={<Amin />} />
          <Route path="/users" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
