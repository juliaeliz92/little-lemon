import { Header, Nav } from '../../sections'
import { navLinks } from "../../constants"
import './styles.scss'

const AppBar = ({handleDrawer}) => {
    return <Header>
        <img src='Logo.svg' alt='little lemon logo' />
        <img src='hamburger_menu.svg' alt='menu' className='hamburger' onClick={handleDrawer}/>
        <Nav links={navLinks} />
    </Header>
}

export default AppBar