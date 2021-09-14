import React from "react";
import LoginSuscripcion from "./LoginSuscripcion";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex">
            </div>
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Iniciar sesión</h5>
              <form>

                <div className="form-floating mb-3">
                  <label htmlFor="floatingInputEmail">Email</label>
                  <input type="email" className="form-control" id="floatingInputEmail" placeholder="email@dominio.com" />

                </div>
                <hr />
                <div className="form-floating mb-3">
                  <label htmlFor="floatingPassword">Contraseña</label>
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />

                </div>

                <div className="d-grid mb-2">
                  < a href="/inicio" className="btn btn-lg btn-primary btn-login fw-bold text-uppercase w-100" type="submit">Ingresar</a>
                </div>
                <a className="d-block text-center mt-2 small" href="#">Olvido su contraseña? </a>
                <a className="d-block text-center mt-2 small" href="/crearCuenta">Crear Cuenta </a>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  < a href="/inicio" className="btn btn-lg btn-google btn-login fw-bold text-uppercase w-100" type="submit">
                    <i className="fab fa-google me-2" /> Iniciar sesión con Google
                  </a>
                </div>
                <div className="d-grid">
                  < a href="/inicio" className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase w-100" type="submit">
                    <i className="fab fa-facebook-f me-2" />Iniciar sesión con Facebook
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Login;