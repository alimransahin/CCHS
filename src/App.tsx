import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Router/Router';

function App() {
  return (
    <div data-theme="dark">
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
