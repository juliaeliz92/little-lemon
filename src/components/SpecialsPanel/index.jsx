import './styles.scss'

const SpecialsPanel = ({special}) => {
    const { name, description, price, image } = special
    return <article className="specials-panel">
        <img src={image} alt={name} />
        <div className='specials-panel-main'>
            <div className='specials-panel-body'>
                <div className='specials-panel-header'>
                    <h1>{name}</h1>
                    <h3>{price}</h3>
                </div>
                <p>{description}</p>
            </div>
            <a href="#">Order a delivery</a>
        </div>
        
    </article>
}

export default SpecialsPanel