import react from "react";

function LoginSuscripcion() {
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light py-3">
                    <div className="container">

                        <a href="#" className="navbar-brand">

                        </a>
                    </div>
                </nav>
            </header>
            <div className="container">
                <div className="row py-5 mt-4 align-items-center">

                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <h1>Crear Cuenta</h1>
                        <img src="https://st2.depositphotos.com/4406529/6475/i/450/depositphotos_64754123-stock-photo-woman-with-toned-body.jpg" alt className="img-fluid mb-3 d-none d-md-block" />

                    </div>

                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div className="row">

                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-user text-muted" />
                                        </span>
                                    </div>
                                    <input id="firstName" type="text" name="firstname" placeholder="Nombre" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-user text-muted" />
                                        </span>
                                    </div>
                                    <input id="lastName" type="text" name="lastname" placeholder="Apellido" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-envelope text-muted" />
                                        </span>
                                    </div>
                                    <input id="email" type="email" name="email" placeholder="email@dominio.com" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-phone-square text-muted" />
                                        </span>
                                    </div>
                                    <select id="countryCode" name="countryCode" style={{ maxWidth: 80 }} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                                        <option value>52</option>

                                    </select>
                                    <input id="phoneNumber" type="tel" name="phone" placeholder="Número Telefonico" className="form-control bg-white border-md border-left-0 pl-3" />
                                </div>

                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-lock text-muted" />
                                        </span>
                                    </div>
                                    <input id="password" type="password" name="password" placeholder="Contraseña" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-lock text-muted" />
                                        </span>
                                    </div>
                                    <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirmar Contraseña" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="form-group col-lg-12 mx-auto mb-0">
                                    <a href="#" className="btn btn-primary btn-block py-2">
                                        <span className="font-weight-bold">Crear tu Cuenta</span>
                                    </a>
                                </div>

                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5" />
                                    <span className="px-2 small text-muted font-weight-bold text-muted">O</span>
                                    <div className="border-bottom w-100 mr-5" />
                                </div>

                                <div className="form-group col-lg-12 mx-auto">
                                    <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                                        <i className="fa fa-facebook-f mr-2" />
                                        <span className="font-weight-bold">Continuar con Facebook</span>
                                    </a>
                                    <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
                                        <i className="fa fa-twitter mr-2" />
                                        <span className="font-weight-bold">Continuar con Twitter</span>
                                    </a>
                                </div>

                                <div className="text-center w-100">
                                    <p className="text-muted font-weight-bold">Ya tienes cuenta? <a href="#" className="text-primary ml-2">Iniciar Sesión</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default LoginSuscripcion;