import './styles.scss'

const PillInput = ({label, onClick, isActive}) => {

    return <div 
        className={`pill-container ${isActive ? 'active' : ''}`} 
        role='button'
        onClick={onClick}
    >{label}</div>
}

export default PillInput