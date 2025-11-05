import { Fragment } from "react";
import icono from "../images/icono.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center">About</h1>
      <hr />
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">
            Acerca de <span className="text-primary">MINI</span>BLOG
          </h1>
          <p className="lead text-muted">Donde tus ideas toman vida</p>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">
              ¿Qué es <strong className="text-primary">MINI</strong>BLOG?
            </h2>
            <p className="lead">
              <strong className="text-primary">MINI</strong>BLOG es una plataforma
              de blogs moderna e intuitiva diseñada para que compartas tus
              pensamientos, experiencias y conocimientos con el mundo. Ya seas
              un escritor experimentado o recién estés comenzando, nuestra
              plataforma te ofrece las herramientas necesarias para expresarte
              de manera efectiva.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.chRPJBszkdcT5lQQq8bjGgHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Blogging"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="m-5" />
      <section className="container py-5">
        <h3 className="text-center mb-5">Nuestro Equipo</h3>
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4 mb-4 mb-md-0">
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <div className="card-body text-center p-4">
                <div className="mx-auto mb-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: "120px",
                      height: "120px",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    EC
                  </div>
                </div>
                <h4 className="mb-1">Eman Cepeda</h4>
                <p className="text-muted mb-3">Desarrollador Full Stack</p>
                <p className="text-muted small">
                  Especializado en desarrollo web y bases de datos. Apasionado
                  por crear experiencias de usuario excepcionales.
                </p>
                <div className="mt-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="text-decoration-none text-dark mx-2"
                    title="GitHub"
                  >
                    <i className="bi bi-github fs-4"></i>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="text-decoration-none text-dark mx-2"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="text-decoration-none text-dark mx-2"
                    title="Twitter"
                  >
                    <i className="bi bi-twitter fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-3">
              <div className="card-body text-center p-4">
                <div className="mx-auto mb-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: "120px",
                      height: "120px",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    FA
                  </div>
                </div>
                <h4 className="mb-1">Federico Arballo</h4>
                <p className="text-muted mb-3">Diseñador UI/UX</p>
                <p className="text-muted small">
                  Experto en diseño de interfaces y experiencia de usuario. Se
                  asegura de que cada interacción sea intuitiva y atractiva.
                </p>
                <div className="mt-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="text-decoration-none text-dark mx-2"
                    title="GitHub"
                  >
                    <i className="bi bi-github fs-4"></i>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="text-decoration-none text-dark mx-2"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    className="text-decoration-none text-dark mx-2"
                    title="Dribbble"
                  >
                    <i className="bi bi-dribbble fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
