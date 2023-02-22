import './HomeView.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const HomeView = () => {
    return (
        <div className='home-container'>
            <h1>NY Times News</h1>
            <section class="dropdown-and-go">
                <select class="dropdown-menu" name="section-types">
                    <option value="select section">Select section</option>
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
                <button class="go-button">Go</button>
            </section>
            <div className='article-card-container'>
                {<ArticleCard/>}
                {<ArticleCard/>}
                {<ArticleCard/>}
            </div>
        </div>
    )
}

export default HomeView