import { useState, useEffect } from "react"
import icono from "../images/icono.png";
import leon from "../images/minimalist Rastafari lion.png";
import neon from "../images/Neon.png";
import { toast } from "react-toastify"
const API_URL = 'http://localhost:5000'

const Register = () => {

  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const [edit, setEdit] = useState(false)
  const [id, setId] = useState("")

  const [users, setUsers] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username, email, password)
    console.log(API_URL)
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, role }),
    })
    const data = await response.json()
    if (!response.ok) {
      // Si el backend mandó error estructurado
      if (data.error) {
        // Si hay errores específicos de campo (por ejemplo "email")
        const mensajes = Object.entries(data.error)
          .map(([campo, errores]) => `${campo}: ${errores.join(", ")}`)
          .join("\n")
        toast.error(`❌ Error:\n${mensajes}`)
      } else {
        toast.error(data.message || "Error desconocido")
      }
      return
    }

    toast.success("✅ Usuario registrado exitosamente")
    setName("")
    setEmail("")
    setPassword("")
    setRole("")
    getUsers()
  }


  const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    })
    const data = await response.json()
    console.log(data)
    setUsers(data.users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center border border-1 rounded-3 p-5 shadow-lg text-light"
        style={{ backgroundColor: "#099BC8" }}
      >
        <span className="text-center fs-1 fw-bold mb-5"><span className="text-primary">MINI</span>BLOG</span>
        <div className="col-md-6">
          <h2 className="text-center mb-4 fs-2 fw-bold">Registrate aqui</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={username || ""}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                autoFocus
              />
              <div id="emailHelp" className="form-text"></div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email || ""}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
              <div id="emailHelp" className="form-text text-light">
                Nunca compartiremos tu email con nadie.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password || ""}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Role
              </label>
              <select
                className="form-control"
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)

                }>
                <option value="">-</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">
                Check me out
              </label>
            </div>
            <button className="btn btn-primary btn-block mt-2 w-100">
              {edit ? "Update" : "Create"}
            </button>
          </form>
        </div>
        <div className="col-md-6 overflow-hidden">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner rounded-4">
              <div className="carousel-item active">
                <img src={leon} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={icono} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={neon} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h2 className="text-center mt-5">Flask con React</h2>
          <p className="text-center fs-4 text-success">En tu dia a dia MiniBlog sera tu guia</p>
          <p className="text-center">Proyecto creado con React y Flask con base en MySQL</p>
          <p className="text-center">De autenticacion usamos JWT, seguridad con bcrypt, despliegue usamos Heroku, versionado usamos Git y GitHub</p>
        </div>
      </div>
    </div>
  );
};
export default Register;
