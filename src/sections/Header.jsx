import Nav from "./Nav"
import { navLinks } from "../constants"

const Header = () => {
    return <header>
        <Nav links={navLinks} />
    </header>
}

export default Header