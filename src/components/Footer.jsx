import icon from "../assets/react.svg"
import vite from "../assets/vite.svg"
import flask from "../assets/flask.svg"
import mysql from "../assets/mysql.svg"

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto vw-100">
            <div className="container">
                <h4 className="text-center mb-4 border-bottom border-white pb-2 shadow">EFI Frontend Realizado con React+Vite & Flask</h4>
                <div className="row text-center">
                    <div className="col-md-3 mb-3 mb-md-0 text-start border-end border-white shadow-sm">
                        <p className="mb-0"><span className="text-primary">MINI</span>BLOG</p>
                        <p className="mb-0">&copy; {new Date().getFullYear()} EFI Frontend</p>
                        <p className="mb-0">Todos los derechos reservados</p>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0 d-flex  gap-2 border-end border-white shadow-sm">
                        <div>
                            <p className="mb-0 text-start mr-2">Desarrollado: </p>
                        </div>
                        <div>

                            <span className="text-info">Cepeda Cáceres Emanuel</span>
                            <br />
                            <span className="text-info">Arballo Federico Ezequiel</span>
                            <br />
                            <span className="text-info">Rodriguez Joaquin Ramon</span>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0 text-start d-flex flex-column gap-2 align-items-center border-end border-white shadow-sm">
                        <div className="d-flex gap-2 align-items-center">
                            <img src={icon} alt="React" className="w-25" />
                            <p className="mb-0 fs-3">+</p>
                            <img src={vite} alt="Vite" className="w-25" />
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <img src={flask} alt="Flask" className="w-25" />
                            <p className="mb-0 fs-3">+</p>
                            <img src={mysql} alt="MySQL" className="w-25" />

                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0 text-start shadow-sm">
                        <p className="mb-0">Contacto: <span className="text-info">+0358 500099988</span></p>
                        <p className="mb-0">Correo: <span className="text-info">efireact&flask@gmail.com</span></p>
                        <p className="mb-0">GitHub: <span className="text-info">efireact&flask</span></p>
                        <p className="mb-0">Instagram: <span className="text-info">efireact&flask</span></p>
                        <p className="mb-0">Facebook: <span className="text-info">efireact&flask</span></p>
                        <p className="mb-0">Youtube: <span className="text-info">efireact&flask</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;