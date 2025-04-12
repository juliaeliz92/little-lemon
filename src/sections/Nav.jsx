const Nav = ({links}) => {
    return <nav>
        <ul>
            {links.map(link => <li><a>{link.label}</a></li>)}
        </ul>
    </nav>
}

export default Nav