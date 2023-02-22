import './App.css'
import { Route, Routes, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomeView from '../HomeView/HomeView'

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
    <div className='App'>
      {<HomeView/>}
    </div>
  )
}

export default App
