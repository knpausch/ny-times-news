import './DetailView.css'
import { Link } from 'react-router-dom'

const DetailView = ({ currentArticle }) => {
    const formatDate = (date) => {
        date = date.slice(0, 10).split('-')
        let day = parseInt(date[2])
        let month = parseInt(date[1])
        let year = date[0]
        switch (month) {
            case 12: month = 'Dec'; break;
            case 1: month = 'Jan'; break;
            case 2: month = 'Feb'; break;
            case 3: month = 'Mar'; break;
            case 4: month = 'Apr'; break;
            case 5: month = 'May'; break;
            case 6: month = 'Jun'; break;
            case 7: month = 'Jul'; break;
            case 8: month = 'Aug'; break;
            case 9: month = 'Sep'; break;
            case 10: month = 'Oct'; break;
            case 11: month = 'Nov'; break;
        }
        date = `${month} ${day}, ${year}`
        return date
    }

    return (
        <div className='detail-container'>
            <h1>NY Times News</h1>
            <Link to={'/'}><button className='home-button'>Home</button></Link>
            <div className='article-container'>
                <h2>{currentArticle.title}</h2>
                <img src={currentArticle.multimedia[0].url} className='article-image' />
                <div className='article-details'>
                    <div className='date-and-author-container'>
                        <h3 className='date-and-author-text'>{formatDate(currentArticle.published_date)}</h3>
                        <h4 className='date-and-author-text'>{currentArticle.byline}</h4>
                    </div>
                    <p><b>Abstract: </b>{currentArticle.abstract}</p>
                    <div className='section-and-url-container'>
                        <h5 className='section-text'>Section: "{currentArticle.section}"</h5>
                        <p>Read Full Article: <a href={currentArticle.url}>NY Times Source</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailView