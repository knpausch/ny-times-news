import './App.css'
import { Route, Routes, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomeView from '../HomeView/HomeView'

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = () => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy')
      .then(response => response.json())
      .then(data => {
        setNewsData(data.results)
        return
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      {<HomeView newsData={newsData} />}
    </div>
  )
}

export default App
