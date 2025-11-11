import { NavLink } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">
          Flask con React
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Links a la izquierda */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-white" : "text-secondary")
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-white" : "text-secondary")
                }
                to="/"
              >
                Users
              </NavLink>
            </li>
            {token && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " + (isActive ? "text-white" : "text-secondary")
                    }
                    to="/blogs/create"
                  >
                    Create Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " + (isActive ? "text-white" : "text-secondary")
                    }
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* Links a la derecha */}
          <ul className="navbar-nav">
            {!token ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " + (isActive ? "text-white" : "text-secondary")
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " + (isActive ? "text-white" : "text-secondary")
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-secondary"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload(); // recarga para actualizar links
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
