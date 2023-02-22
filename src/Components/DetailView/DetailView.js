import './DetailView.css'
import { Link } from 'react-router-dom'

const DetailView = () => {
    return(
        <div className='detail-container'>
            <h1>NY Times News</h1>
                <Link to={'/'}><button className="home-button">Home</button></Link>
            <div className='article-container'>
                <p>Heyy some stuff whooo</p>
            </div>
        </div>
    )
}

export default DetailView