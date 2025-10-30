import { useState, useEffect } from "react"
const API_URL = 'http://localhost:5000'


const Users = () => {

    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [edit, setEdit] = useState(false)
    const [id, setId] = useState("")

    const [users, setUsers] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!edit) { 
            console.log(username, email, password)
            console.log(API_URL)
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            })
            const data = await response.json()
            console.log(data);}
        else {
            const response = await fetch(`${API_URL}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            })
            const data = await response.json()
            console.log(data)
            setEdit(false)
            setId("")  
        }

        await getUsers()

        setName("")
        setEmail("")
        setPassword("")
    }

    
    const getUsers = async() => {
        const response = await fetch(`${API_URL}/users`)
        const data = await response.json()
        console.log(data)   
        setUsers(data.users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = async(id) => {
        const response = await fetch(`${API_URL}/users/${id}`, {
            method: "DELETE",
        })
        const data = await response.json()
        console.log(data)
        await getUsers()
    }

    const updateUser = async(id) => {
        const response = await fetch(`${API_URL}/users/${id}`)
        const data = await response.json()

        setEdit(true)
        setId(id)

        setName(data.username)
        setEmail(data.email)
        setPassword(data.password)
    }

    return (
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="card card-body p-4 gap-4">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                value={username}
                                className="form-control" 
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                autoFocus 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={email}
                                className="form-control" 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                value={password} 
                                className="form-control" 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <button className="btn btn-primary btn-block mt-2">
                            {edit ? "Update" : "Create"}
                        </button>

                    </form>
                </div>
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(users).map(user => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td className="d-flex flex-column gap-1">
                                        <button 
                                        className="btn btn-warning"
                                        onClick={() =>updateUser(user.id)}>Update</button>
                                        <button 
                                        className="btn btn-danger"
                                        onClick={() =>deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}
export default Users