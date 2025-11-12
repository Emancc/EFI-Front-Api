import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const API_URL = "http://localhost:5000";

function parseJWT(token) {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    if (!token) return;

    if (username) return;

    let uid = localStorage.getItem("user_id");
    if (!uid) {
      const payload = parseJWT(token);
      uid = payload?.sub || payload?.user_id || payload?.identity || null;
      if (uid) localStorage.setItem("user_id", uid);
    }
    if (!uid) return;

    (async () => {
      try {
        const res = await fetch(`${API_URL}/users/${uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        if (!res.ok) return;
        const data = await res.json();
        const name =
          data?.username ||
          data?.usuario?.username ||
          data?.user?.username ||
          "";

        if (name) {
          setUsername(name);
          localStorage.setItem("username", name);
        }
      } catch {
      }
    })();
  }, [token, username]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
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

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/">
                Bienvenida
              </NavLink>
            </li>
            {token && (
              <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/blogs/create">
                    Create Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/blogs">
                    Blogs
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/about">
                About
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            {!token ? (
              <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-white" : "text-secondary")} to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item d-flex align-items-center">
                  <span className="nav-link">
                    <span className="text-success fw-semibold">{username || "Usuario"}</span>
                  </span>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link text-secondary" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
