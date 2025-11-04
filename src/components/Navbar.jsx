import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">Flask con React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-secondary" aria-current="page" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="nav-link active text-secondary" aria-current="page" to="/">Users</Link>      
                            </li>
                            <li>
                                <Link className="nav-link active text-secondary" aria-current="page" to="/blogs">Blogs</Link>      
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li>
                                    <Link className="nav-link active text-secondary" aria-current="page" to="/login">Login</Link>      
                                </li>
                                <li>
                                    <Link className="nav-link active text-secondary" aria-current="page" to="/register">Register</Link>      
                                </li>
                            </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar