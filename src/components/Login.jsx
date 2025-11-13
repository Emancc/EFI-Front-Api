import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
const API_URL = 'http://localhost:5000'


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
        })

        const data = await response.json()

        if (response.ok) {
            localStorage.setItem("token", data.access_token)
            console.log(data.access_token)

            toast.success("✅ Login exitoso")
            navigate("/")
        } else {
            toast.error(data.error || "Error en el login")
        }
    }

useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
        navigate("/")
    }
}, [navigate])

    return (
        <div className="container p-5 rounded shadow mt-5 w-50 bg-white">
            <form onSubmit={handleSubmit}>
                <h1 className="text-center bg-primary text-white p-2 rounded mb-5">Login</h1>
                <div className="m-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="emaillogin" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu email con nadie.</div>
                </div>
                <div className="m-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordlogin" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-info w-100 mt-5">Iniciar sesión</button>
            </form>
        </div>
    )
}
export default Login