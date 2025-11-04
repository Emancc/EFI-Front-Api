import Swal from "sweetalert2";
import { useState, useEffect } from "react"

const API_URL = 'http://localhost:5000'


const Users = () => {

    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const [edit, setEdit] = useState(false)
    const [id, setId] = useState("")

    const [allUsers, setAllUsers] = useState([])
    const [users, setUsers] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!edit) {
            console.log(username, email, password)
            console.log(API_URL)
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password, role }),
            })
            const data = await response.json()
            alert("✅ Usuario creado exitosamente")
            console.log(data)
        }
        else {
            const response = await fetch(`${API_URL}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password, role }),
            })
            console.log("Status", response.status)
            const data = await response.json()
            console.log("Data", data)
            alert("✅ Usuario actualizado exitosamente")
            setEdit(false)
            setId("")
        }
        await getUsers()


        setName("")
        setEmail("")
        setPassword("")
    }


    const getUsers = async () => {
        const response = await fetch(`${API_URL}/users`)
        const data = await response.json()
        console.log(data)
        setAllUsers(data.users)
        setUsers(data.users)
        localStorage.setItem("users", JSON.stringify(data.users))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = async (id) => {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (!result.isConfirmed) return; // si cancela, no hace nada

        try {
            const response = await fetch(`${API_URL}/users/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Error al eliminar usuario");

            const data = await response.json();
            console.log(data);

            await Swal.fire("Eliminado", "El usuario fue eliminado correctamente.", "success");
            await getUsers();
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Hubo un problema al eliminar el usuario.", "error");
        }
    };


    const updateUser = async (id) => {
        const response = await fetch(`${API_URL}/users/${id}`)
        const data = await response.json()

        setEdit(true)
        setId(id)

        setName(data.username)
        setEmail(data.email)
        setPassword(data.password)
        setRole(data.role)
    }


    const [filterUsernameValue, setFilterUsernameValue] = useState("");
    const [filterEmailValue, setFilterEmailValue] = useState("");
    const [filterRoleValue, setFilterRoleValue] = useState("");


    const filterUsername = (e) => {
        const value = e.target.value.toLowerCase();
        setFilterUsernameValue(value);

        if (value === "") {
            setUsers(allUsers);
        } else {
            const filtered = allUsers.filter(user =>
                user.username.toLowerCase().includes(value)
            );
            setUsers(filtered);
        }
    };

    const filterEmail = (e) => {
        const value = e.target.value.toLowerCase();
        setFilterEmailValue(value);

        if (value === "") {
            setUsers(allUsers);
        } else {
            const filtered = allUsers.filter(user =>
                user.email.toLowerCase().includes(value)
            );
            setUsers(filtered);
        }
    };

    const filterRole = (e) => {
        const value = e.target.value.toLowerCase();
        setFilterRoleValue(value);

        if (value === "") {
            setUsers(allUsers);
        } else {
            const filtered = allUsers.filter(user =>
                user.role.toLowerCase().includes(value)
            );
            setUsers(filtered);
        }
    };

    const resetFilters = () => {
        setFilterUsernameValue("");
        setFilterEmailValue("");
        setFilterRoleValue("");
        setUsers(allUsers);
    }

    return (
        <div className="container">
            <h1 className="text-center">Create & Manage Users</h1>
            <hr />
            <div className="row">
                <h2 className="text-center mb-4 fs-4 fw-bold">registros y actualizaciones en modo admin o manager</h2>
                <div className="col-md-4">
                    <hr />
                    <h2 className="text-center mb-4 fs-4 fw-bold">Formulario de registro</h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="card card-body p-4 gap-4">
                        <div className="form-group">
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
                        </div>
                        <hr />
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email || ""}
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@example.com"
                            />
                        </div>
                        <hr />
                        <div className="form-group">
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
                        <hr />
                        <div className="form-group">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select
                                className="form-control"
                                name="role"
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)
                                }>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <button className="btn btn-primary btn-block mt-2">
                            {edit ? "Update" : "Create"}
                        </button>
                    </form>
                    <hr />
                    <h2 className="text-center mb-4 fs-4 fw-bold">Filtros</h2>
                    <hr />
                    <div className="card card-body p-4 gap-4">
                        <h4>Buscar por usuario</h4>
                        <input className="form-control" type="text" value={filterUsernameValue} placeholder="Buscar usuario" onChange={filterUsername} />
                        <hr />
                        <h4>Buscar por email</h4>
                        <input className="form-control mt-2" type="text" value={filterEmailValue} placeholder="Buscar email" onChange={filterEmail} />
                        <hr />
                        <h4>Buscar por Rol</h4>
                        <select className="form-control" name="filter-role" value={filterRoleValue} onChange={filterRole} >
                            <option value="">-</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                        </select>
                        <button className="btn btn-success mt-2 w-100" onClick={resetFilters}>Resetear Filtros</button>
                    </div>
                </div>
                <div className="col-md-8 border border-1 rounded">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(users).map(user => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.created_at}</td>
                                    <td className="d-flex flex-column gap-1">
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => updateUser(user.id)}>Update</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Users