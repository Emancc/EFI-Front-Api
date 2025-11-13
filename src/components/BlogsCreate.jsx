import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const token = localStorage.getItem("token")

const API_URL = 'http://localhost:5000'

const BlogsCreate = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(title, description, category)
        try {
            const response = await fetch(`${API_URL}/blogs`, { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ title, description, category_id: category ? parseInt(category) : null }),
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: `Server error: ${response.statusText}` }));
                console.error("Failed to create blog:", response.status, errorData);
                toast.error(`❌ Error al crear blog: ${errorData.message || response.statusText}`);
                return;
            }

            const data = await response.json();
            console.log(data);
            setTitle("");
            setDescription("");
            setCategory("");
            toast.success("✅ Blog creado exitosamente");
            getBlogs();
            navigate("/blogs");
        } catch (error) {
            console.error("Network or parsing error:", error);
            toast.error("❌ Error de conexión o formato de respuesta.");
        }
    }

    const getBlogs = async () => {
        const response = await fetch(`${API_URL}/blogs`)
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(`${API_URL}/categories`);
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div className="container">
            <h1 className="text-center bg-primary text-white p-2 rounded mb-2">Create Blog</h1>
            <ul className="list-unstyled text-center">
                <li className="text-secondary">📖libera tu creatividad y comparte tus pensamientos con el mundo</li>
                <li className="text-secondary">👌 En nuestra comunidad nos gusta que te sientas cómodo</li>
                <li className="text-secondary">📝 Podrás clasificar tus blogs a través de categorías preestablecidas</li>
            </ul>
            <hr />
            <form action="">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripcion</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select name="" id="" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">-</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default BlogsCreate