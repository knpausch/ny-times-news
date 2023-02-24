import './App.css'
import { Route, Routes, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomeView from '../HomeView/HomeView'
import DetailView from '../DetailView/DetailView'

function App() {
  const [newsData, setNewsData] = useState([])
  const [currentArticle, setCurrentArticle] = useState({})

  const getData = () => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hJ0FcCaJDYmhdMWUGZW8WtEDnv3AGhsy')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setNewsData(data.results)
        return
      })
  }

  const setArticle = (selectedTitle) => {
    const findArticle = newsData.find(article => {
      return article.title === selectedTitle
    })
    setCurrentArticle(findArticle)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <HomeView newsData={newsData} setArticle={setArticle}/> }/>
        <Route exact path='/article/:name' render={() => <DetailView currentArticle={currentArticle}/>} />
      </Switch>
    </div>
  )
}

export default App
