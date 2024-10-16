import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <App />
    <Toaster
  containerStyle={{
    top: '60%',
    left: '50%',
    position: 'fixed',
    transform: 'translate(-50%, -50%)', // Centers the container
    backgroundColor:"bla",
   
  }}
  toastOptions={{
    style: {
      // border: '1px solid #713200',
      padding: '16px',
      boxShadow:' rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      postition:"fixed",
      bootom:"0px"
    },
  }}
/>
  </>




 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
