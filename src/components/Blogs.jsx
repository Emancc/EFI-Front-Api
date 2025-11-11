// Blogs.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000";
const token = localStorage.getItem("token");

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${API_URL}/blogs`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!response.ok) {
                    const data = await response.json();
                    toast.error(data.Mensaje || "Error al traer los blogs");
                    return;
                }

                const data = await response.json();
                console.log("API response:", data);
                setBlogs(data.blogs || []); // <-- aquí va el array real
            } catch (error) {
                console.error(error);
                toast.error("Error de conexión");
            }
        };

        fetchBlogs();
    }, []);


    if (blogs.length === 0) return <p>No hay blogs para mostrar.</p>;

    return (
        <div className="row">
            {blogs.map((blog) => (
                <div className="col-md-4 mb-4" key={blog.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">
                                {blog.description.length > 100
                                    ? blog.description.slice(0, 100) + "..."
                                    : blog.description}
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                Autor: {blog.author?.username || "Desconocido"} | Categoría: {blog.category?.name || "-"}
                            </small>
                            <br />
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="btn btn-sm btn-primary mt-2"
                            >
                                Ver Detalle
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
