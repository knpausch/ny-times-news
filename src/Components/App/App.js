import logo from '../../logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // const getData = () => {
  //   fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("Data: ", data.results[0].abstract)
  //     return
  //   })
  // }

  // useEffect(() => {
  //   console.log("ok boss")
  //   getData()
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
