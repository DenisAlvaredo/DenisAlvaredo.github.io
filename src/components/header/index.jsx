function NavBar({ brand }) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase">{brand}</a>
                <div>
                    <a className="navbar-brand text-uppercase" href="/" >Characters</a>
                    <a className="navbar-brand text-uppercase" href="/episodes" >Episodes</a>
                    <a className="navbar-brand text-uppercase" href="/locations" >Locations</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar