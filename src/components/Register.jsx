import icono from "../images/icono.png"
import leon from "../images/minimalist Rastafari lion.png"
import neon from "../images/Neon.png"

const Register = () => {
    return (
        <div>
            <h1 className="text-center">Register</h1>
            <hr />
            <div className="row justify-content-center align-items-center bg-info border border-1 rounded-3 p-2">
                <div className="col-md-6">
                    <h2 className="text-center mb-4 fs-2 fw-bold">Registrate aqui</h2>
                    <form>
                        <div className="mb-3">
                            <label for="exampleName" class="form-label">Nombre</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text"></div>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">Nunca compartiremos tu email con nadie.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Role</label>
                            <select type="role" class="form-control" id="rolUser">
                                <option value="">-</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>                
                            </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6 overflow-hidden">
                    <div id="carouselExample" class="carousel slide">
                        <div className="carousel-inner rounded-4">
                            <div className="carousel-item active">
                            <img src={leon}  class="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={icono} class="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={neon}  class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>

        </div>
    )
}
export default Register