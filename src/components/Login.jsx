import { useState, useEffect } from "react"
import { toast } from "react-toastify"
const API_URL = 'http://localhost:5000'


const Login = () => {

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
        } else {
            toast.error(data.error || "Error en el login")
        }
    }



    return (
        <div className="container">
            <h1 className="text-center">Login</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="emaillogin" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu email con nadie.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordlogin" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkboxlogin" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login