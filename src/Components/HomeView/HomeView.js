import './HomeView.css'
import ArticleCard from '../ArticleCard/ArticleCard'
import { useEffect, useState } from 'react'

const HomeView = ({ newsData, setArticle }) => {
    const [newsSection, setNewsSection] = useState('')
    const [listOfArticles, setListOfArticles] = useState([])

    useEffect(() => {
        setListOfArticles(newsData)
    }, [newsData])

    const articleCards = listOfArticles.map(story => {
        return (
            <ArticleCard title={story.title} key={story.created_date} setArticle={setArticle} />
        )
    })

    const handleChange = (event) => {
        setNewsSection(event.target.value)
        return
    }

    const filterArticles = () => {
        const filteredList = newsData.filter(article => {
            return article.section === newsSection
        })
        setListOfArticles(filteredList)
    }

    const resetArticles = () => {
        setListOfArticles(newsData)
    }

    return (
        <div className='home-container'>
            <h1>NY Times News</h1>
            <section className='dropdown-and-go'>
                <select className='dropdown-menu' name='section-types' onChange={event => handleChange(event)}>
                    <option value='select section'>(Select Section)</option>
                    <option value='arts'>arts</option>
                    <option value='automobiles'>automobiles</option>
                    <option value='books'>books</option>
                    <option value='business'>business</option>
                    <option value='climate'>climate</option>
                    <option value='fashion'>fashion</option>
                    <option value='food'>food</option>
                    <option value='health'>health</option>
                    <option value='home'>home</option>
                    <option value='insider'>insider</option>
                    <option value='magazine'>magazine</option>
                    <option value='movies'>movies</option>
                    <option value='opinion'>opinion</option>
                    <option value='politics'>politics</option>
                    <option value='podcasts'>podcasts</option>
                    <option value='realestate'>realestate</option>
                    <option value='science'>science</option>
                    <option value='sports'>sports</option>
                    <option value='technology'>technology</option>
                    <option value='theater'>theater</option>
                    <option value='travel'>travel</option>
                    <option value='us'>us</option>
                    <option value='world'>world</option>
                </select>
                <button className='go-button' onClick={() => filterArticles()}>Go</button>
                <button className='reset-button' onClick={() => resetArticles()}>Reset</button>
            </section>
            <div className='article-card-container'>
                {articleCards.length ? articleCards : <h2>No Articles Found</h2>}
            </div>
        </div>
    )
}

export default HomeView