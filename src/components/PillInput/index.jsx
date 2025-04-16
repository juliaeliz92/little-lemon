import './styles.scss'

const PillInput = ({label, isActive}) => {
    return <div className={`pill-container ${isActive ? 'active' : ''}`} role='button'>{label}</div>
}

export default PillInput