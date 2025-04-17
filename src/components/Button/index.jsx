import './styles.scss'

const Button = ({children, className}) => {
    return <button className={className} data-testid="submit-button">{children}</button>
}

export default Button