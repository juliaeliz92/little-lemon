const Nav = ({links, isHorizontal}) => {
    return <nav>
        <ul className={`${isHorizontal ? 'list-horizontal' : ''}`}>
            {links.map((link, ind) => <li key={ind}><a href={link.link}>{link.label}</a></li>)}
        </ul>
    </nav>
}

export default Nav