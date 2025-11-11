// src/components/BlogDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL; // o tu constante global

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem("token"); // si usas JWT
                const response = await fetch(`${API_URL}/blogs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("No se pudo cargar el blog");
                }

                const data = await response.json();
                setBlog(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!blog) return <p>No se encontró el blog.</p>;

    return (
        <div className="card m-3 p-3 shadow-sm" style={{ maxWidth: "600px" }}>
            <div className="card-body">
                <h3 className="card-title">{blog.title}</h3>
                <p className="text-muted">
                    Autor: <strong>{blog.author?.username}</strong> | Fecha:{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                </p>
                <p className="card-text">{blog.description}</p>

                {blog.category && (
                    <span className="badge bg-primary">
                        {blog.category.name}
                    </span>
                )}

                {blog.comments?.length > 0 && (
                    <div className="mt-3">
                        <h5>Comentarios:</h5>
                        <ul className="list-group">
                            {blog.comments.map((c) => (
                                <li key={c.id} className="list-group-item">
                                    <strong>{c.user?.username}: </strong>
                                    {c.content}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
