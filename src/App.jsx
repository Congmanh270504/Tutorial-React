import React, { Component, useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-container'>
          <div className='slidenav-container'></div>
          <div className='app-content'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;