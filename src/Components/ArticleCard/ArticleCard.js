import './ArticleCard.css'
import newsPaper from '../../Images/newspaper.png'
import { NavLink } from 'react-router-dom'

const ArticleCard = ({ title }) => {
    return (
        <NavLink className='wrapper' to={`/article/${title}`}><div className='newspaper-and-title-container'>
            <img src={newsPaper} className='newspaper-img' />
            <h2>{title}</h2>
        </div></NavLink>
    )
}

export default ArticleCard