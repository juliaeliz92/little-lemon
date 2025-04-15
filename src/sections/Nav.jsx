const Nav = ({links, isHorizontal}) => {
    return <nav>
        <ul className={`${isHorizontal ? 'list-horizontal' : ''}`}>
            {links.map((link, ind) => <li key={ind}><a>{link.label}</a></li>)}
        </ul>
    </nav>
}

export default Nav