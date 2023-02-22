import './ArticleCard.css'
import newsPaper from '../../Images/newspaper.png'

const ArticleCard = () => {
    return (
        <div className='newspaper-and-title-container'>
            <img src={newsPaper} className='newspaper-img' />
            <h2>Some Biden Missle Fight Thingy whatever</h2>
        </div>
    )
}

export default ArticleCard