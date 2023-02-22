import './ArticleCard.css'
import newsPaper from '../../Images/newspaper.png'

const ArticleCard = ({ title }) => {
    return (
        <div className='newspaper-and-title-container'>
            <img src={newsPaper} className='newspaper-img' />
            <h2>{title}</h2>
        </div>
    )
}

export default ArticleCard