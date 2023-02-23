import './ArticleCard.css'
import newsPaper from '../../Images/newspaper.png'
import { NavLink } from 'react-router-dom'

const ArticleCard = ({ title, setArticle }) => {
    // console.log("hey look right here: ", title)
    return (
        <NavLink className='wrapper' to={`/article/${title}`}><div className='newspaper-and-title-container' onClick={() => setArticle(title)}>
            <img src={newsPaper} className='newspaper-img' />
            <h2>{title}</h2>
        </div></NavLink>
    )
}

export default ArticleCard