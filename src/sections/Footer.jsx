import { navLinks } from "../constants"
import Nav from "./Nav"
import './footer.scss'

const Footer = () => {
    return <footer className="footer-container">
        <section className="row">
            <img src="Logo.svg" alt="logo" />
            <div className="column">
                <h3>Doormat Navigation</h3>
                <Nav links={navLinks} />
            </div>
        </section>
        <section className="row">
            <div className="column">
                <h3>Contact</h3>
                <span>Address</span>
                <span>Phone number</span>
                <span>Email</span>
            </div>
            <div className="column">
                <h3>Social Media Links</h3>
                <span>Facebook</span>
                <span>Instagram</span>
            </div>
        </section>
    </footer>
}

export default Footer