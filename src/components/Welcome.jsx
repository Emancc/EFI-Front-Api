import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Welcome = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username") || "";

    useEffect(() => {
        const token = localStorage.getItem("token")

    }, [token])

    return (
        <div
            className="min-vh-100 d-flex align-items-center bg-light">
            <div className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold mb-3 text-center text-lg-start display-4 display-md-1">
                            ¡Bienvenido{username ? `, ${username.toUpperCase()}` : ""}!
                        </h1>

                        <p className="lead text-secondary mb-4 text-center text-lg-start">Un espacio para compartir tus conocimientos y experiencias con otros usuarios.<br/>
                        Donde puedes crear, leer, actualizar y eliminar tus blogs.<br/>
                        Comparte tus ideas y aprende de las de otros.<br/>
                        Muestrale a los demás lo que has aprendido.<br/>
                        No dudes en crear un blog y compartirlo con el mundo.
                        </p>

                        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                            <span className="badge text-bg-light border">React</span>
                            <span className="badge text-bg-light border">Flask</span>
                            <span className="badge text-bg-light border">Python / R</span>
                            <span className="badge text-bg-light border">Arduino</span>
                            <span className="badge text-bg-light border">E-commerce</span>
                            <span className="badge text-bg-light border">DevOps</span>
                            <span className="badge text-bg-light border">Machine Learning</span>
                            <span className="badge text-bg-light border">Vida</span>
                            <span className="badge text-bg-light border">Web</span>
                            <span className="badge text-bg-light border">Movil</span>
                            <span className="badge text-bg-light border">IoT</span>
                            <span className="badge text-bg-light border">AI</span>
                            <span className="badge text-bg-light border">Programacion</span>
                            <span className="badge text-bg-light border">Ciencia</span>
                            <span className="badge text-bg-light border">Hogar</span>
                            <span className="badge text-bg-light border">Viajes</span>
                            <span className="badge text-bg-light border">Deportes</span>
                            <span className="badge text-bg-light border">Salud</span>
                            <span className="badge text-bg-light border">Finanzas</span>
                            <span className="badge text-bg-light border">Negocios</span>
                            <span className="badge text-bg-light border">Marketing</span>
                            <span className="badge text-bg-light border">Publicidad</span>
                        </div>

                        {!token ? (
                            <div className="alert alert-light border p-5 bg-white">
                                <p className="mb-3 text-center text-lg-start">
                                    <strong>Logeate</strong> o, si no estás registrado, <strong>registrate</strong> para continuar.
                                </p>
                                <div className="d-grid gap-2 d-sm-flex">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary flex-fill"
                                        onClick={() => navigate("/login")}
                                    >
                                        Iniciar sesión
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary flex-fill"
                                        onClick={() => navigate("/register")}
                                    >
                                        Registrarme
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="d-grid d-sm-inline-flex">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg px-4"
                                    onClick={() => navigate("/blogs")}
                                >
                                    Ir a blogs
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <div className="row g-3">
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🧠</div>
                                        <div className="small fw-semibold">Tutoriales</div>
                                        <div className="small text-secondary">paso a paso</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">⚙️</div>
                                        <div className="small fw-semibold">Proyectos</div>
                                        <div className="small text-secondary">código y demos</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">📊</div>
                                        <div className="small fw-semibold">Datos</div>
                                        <div className="small text-secondary">insights y análisis</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🧭</div>
                                        <div className="small fw-semibold">Mapas</div>
                                        <div className="small text-secondary">ubicaciones y rutas</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">📱</div>
                                        <div className="small fw-semibold">Tecnología</div>
                                        <div className="small text-secondary">hardware y software</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">📖</div>
                                        <div className="small fw-semibold">Libros</div>
                                        <div className="small text-secondary">lectura y estudio</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🏡</div>
                                        <div className="small fw-semibold">Hogar</div>
                                        <div className="small text-secondary">interiores y exteriores</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🤖</div>
                                        <div className="small fw-semibold">Robótica</div>
                                        <div className="small text-secondary">robots y drones</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🦗</div>
                                        <div className="small fw-semibold">Fauna</div>
                                        <div className="small text-secondary">animales y plantas</div>
                                    </div>
                                </div>                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">✈️</div>
                                        <div className="small fw-semibold">Viajes</div>
                                        <div className="small text-secondary">destinos y paquetes</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🛸</div>
                                        <div className="small fw-semibold">Ciencia Ficción</div>
                                        <div className="small text-secondary">películas y libros</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🚴‍♂️</div>
                                        <div className="small fw-semibold">Deportes</div>
                                        <div className="small text-secondary">actividades y entrenamientos</div>
                                    </div>
                                </div>
                                <h4 className="text-center">Todo esto y mas podras compartir en la comunidad
                                <p className="text-secondary fs-6">Comparte tus conocimientos y experiencias con otros usuarios</p></h4>
                            </div>

                            <p className="mt-3 mb-0 text-center text-secondary d-block d-lg-none">
                                Descubrí contenidos pensados para aprender y construir paso a paso.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Welcome;
