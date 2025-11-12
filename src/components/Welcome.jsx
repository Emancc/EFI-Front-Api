// src/components/Welcome.jsx
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username") || "";

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{ background: "linear-gradient(135deg,#f8f9fa 0%,#eef2f7 100%)" }}
        >
            <div className="container py-5">
                <div className="row align-items-center g-5">
                    {/* Texto principal */}
                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold mb-3 text-center text-lg-start" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                            ¡Bienvenido{username ? `, ${username}` : ""}!
                        </h1>

                        <p className="lead text-secondary mb-4 text-center text-lg-start">
                            Un espacio con artículos y notas sobre <strong>desarrollo web</strong> (React + Flask),
                            <strong> ciencia de datos</strong> (Python / R), proyectos con <strong>Arduino/IoT</strong> y experiencias de{" "}
                            <strong>e-commerce</strong>.
                        </p>

                        {/* Badges temáticas (se acomodan en móvil) */}
                        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                            <span className="badge text-bg-light border">React</span>
                            <span className="badge text-bg-light border">Flask</span>
                            <span className="badge text-bg-light border">Python / R</span>
                            <span className="badge text-bg-light border">Arduino</span>
                            <span className="badge text-bg-light border">E-commerce</span>
                            <span className="badge text-bg-light border">DevOps</span>
                        </div>

                        {/* CTA: loguearse / registrarse si NO hay token */}
                        {!token ? (
                            <div className="alert alert-light border p-3">
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
                            // Si HAY token, mostrar sólo el botón Ir a blogs
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

                    {/* Tarjetas ilustrativas (responsivo) */}
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
