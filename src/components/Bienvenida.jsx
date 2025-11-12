import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{ background: "linear-gradient(135deg,#f8f9fa 0%,#eef2f7 100%)" }}
        >
            <div className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold mb-3">¡Bienvenido!</h1>
                        <p className="lead text-secondary mb-4">
                            Un espacio con artículos y notas sobre{" "}
                            <strong>desarrollo web</strong> (React + Flask),
                            <strong> ciencia de datos</strong> (Python / R), proyectos con{" "}
                            <strong>Arduino/IoT</strong> y experiencias de{" "}
                            <strong>e-commerce</strong>.
                        </p>

                        <div className="mb-4">
                            <span className="badge text-bg-light border me-2 mb-2">React</span>
                            <span className="badge text-bg-light border me-2 mb-2">Flask</span>
                            <span className="badge text-bg-light border me-2 mb-2">Python / R</span>
                            <span className="badge text-bg-light border me-2 mb-2">Arduino</span>
                            <span className="badge text-bg-light border me-2 mb-2">E-commerce</span>
                            <span className="badge text-bg-light border me-2 mb-2">DevOps</span>
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary btn-lg px-4"
                            onClick={() => navigate("/blogs")}
                        >
                            Ir a blogs
                        </button>
                    </div>

                    <div className="col-lg-6">
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <div className="row mt-4 g-3">
                                <div className="col-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">🧠</div>
                                        <div className="small fw-semibold">Tutoriales</div>
                                        <div className="small text-secondary">paso a paso</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">⚙️</div>
                                        <div className="small fw-semibold">Proyectos</div>
                                        <div className="small text-secondary">código y demos</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="p-3 rounded-3 border bg-light h-100 text-center">
                                        <div className="fs-3 mb-2">📊</div>
                                        <div className="small fw-semibold">Datos</div>
                                        <div className="small text-secondary">insights y análisis</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
