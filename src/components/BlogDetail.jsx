import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const API_URL = "http://localhost:5000";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [saving, setSaving] = useState(false);

    const token = localStorage.getItem("token");
    const userId = parseInt(localStorage.getItem("user_id"));

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`${API_URL}/blogs/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!response.ok) throw new Error("No se pudo cargar el blog");
                const data = await response.json();
                setBlog(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id, token]);

    const handleCreateComment = async (e) => {
        e.preventDefault();
        const description = newComment.trim();
        if (!description) return toast.error("Escribe un comentario.");
        try {
            setSaving(true);
            const res = await fetch(`${API_URL}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    description,
                    blog_id: Number(id),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.Mensaje || "No se pudo crear el comentario");
            toast.success("Comentario publicado");
            setNewComment("");
            setBlog((prev) => ({
                ...prev,
                comments: [data, ...(prev?.comments || [])],
            }));
        } catch (err) {
            console.error(err);
            toast.error(err.message || "Error de conexión");
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteComment = async (commentId) => {
        const result = await Swal.fire({
            title: "¿Eliminar comentario?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#d33",
        });
        if (!result.isConfirmed) return;

        try {
            const res = await fetch(`${API_URL}/comments/${commentId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok) {
                toast.success("Comentario eliminado");
                setBlog((prev) => ({
                    ...prev,
                    comments: prev.comments.filter((c) => c.id !== commentId),
                }));
            } else {
                toast.error(data.Mensaje || "Error al eliminar comentario");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error de conexión");
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!blog) return <p>No se encontró el blog.</p>;

    return (
        <>

            <h1 className="text-center bg-primary text-white p-2 rounded mb-2">Detalle del Blog</h1>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <hr className="w-100" />

                <div className="card m-5 p-3 shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title text-center fw-bold fs-3 mb-4 text-primary">{blog.title.toUpperCase()}</h3>
                        <p className="text-muted">
                            Autor: <strong>{blog.author?.username}</strong> | Fecha:{" "}
                            {new Date(blog.created_at).toLocaleDateString()}
                        </p>
                        <p className="card-text">{blog.description}</p>

                        {blog.category && (
                            <span className="badge bg-primary">{blog.category.name}</span>
                        )}

                        <div className="mt-4">
                            <h5>Agregar comentario</h5>
                            <form onSubmit={handleCreateComment}>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Escribe tu comentario..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    disabled={saving}
                                />
                                <button type="submit" className="btn btn-success mt-2" disabled={saving}>
                                    {saving ? "Publicando..." : "Publicar"}
                                </button>
                            </form>
                        </div>

                        {blog.comments?.length > 0 && (
                            <div className="mt-3">
                                <h5>Comentarios:</h5>
                                <ul className="list-group">
                                    {blog.comments.map((c) => (
                                        <li
                                            key={c.id}
                                            className="list-group-item d-flex gap-4 justify-content-between align-items-center"
                                        >
                                            <span>
                                                <strong>{c.user?.username}: </strong>
                                                {c.description}
                                            </span>
                                            {c.user_id === userId && (
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDeleteComment(c.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
