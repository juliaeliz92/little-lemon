import { Nav } from '../../sections'
import { navLinks } from '../../constants' 
import './styles.scss'

const Drawer = ({ isOpen, closeDrawer }) => {

    const stopPropagation = (e) => {
        e.stopPropagation()
    }
    return <div className={`drawer-overlay ${isOpen ? 'openOverlay' : 'closeOverlay'}`} onClick={closeDrawer}>
        <section className={`drawer ${isOpen ? 'openDrawer' : 'closeDrawer'}`} onClick={stopPropagation}>
            <img src='Logo.svg' alt='little lemon logo' />
            <Nav links={navLinks}/>
        </section>
    </div>
}

export default Drawer