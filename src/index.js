import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

// fetch('https://randomuser.me/api/')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Vse propalo'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const giveMePrimitives = async () => {
//   return [
//     String('test'),
//     Number(123),
//     Symbol('hiThere'),
//     Boolean(false),
//     undefined,
//     45n,
//     null,
//   ];
// };

// const giveMeResultsNow = async () => {
//   // const data = await giveMePrimitives();

//   // console.log(data);

//   const result = await twoSecsToHell();
//   console.log(result);
// };
// giveMeResultsNow();

// async function twoSecsToHell () {
//   const response =new Promise(res => {
//     setTimeout(() => {
//       res('Pog');
//     }, 2000);
//   });

//   const data = await response;

//   return data;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
