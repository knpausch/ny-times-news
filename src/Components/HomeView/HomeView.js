import './HomeView.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const HomeView = ({ newsData }) => {
    const articleCards = newsData.map(story => {
        return (
            <ArticleCard title={story.title} key={story.created_date} />
        )
    })

    return (
        <div className='home-container'>
            <h1>NY Times News</h1>
            <section className="dropdown-and-go">
                <select className="dropdown-menu" name="section-types">
                    <option value="select section">(Select section)</option>
                    <option value="arts">arts</option>
                    <option value="automobiles">automobiles</option>
                    <option value="books">books</option>
                    <option value="business">business</option>
                    <option value="fashion">fashion</option>
                    <option value="food">food</option>
                    <option value="health">health</option>
                    <option value="home">home</option>
                    <option value="movies">movies</option>
                    <option value="science">science</option>
                    <option value="sports">sports</option>
                    <option value="technology">technology</option>
                    <option value="travel">travel</option>
                    <option value="world">world</option>
                </select>
                <button className="go-button">Go</button>
            </section>
            <div className='article-card-container'>
                {articleCards}
            </div>
        </div>
    )
}

export default HomeView