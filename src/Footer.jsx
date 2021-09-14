import React from "react";

function Footer() {
    return (
        <div>
            <hr />
            <div className="list-unstyled list-inline text-center py-2">
                <div className="">
                    <h5 className="mb-1">¡No te pierdas nuestras novedades!</h5>
                    <span>
                        <form>
                            <div className="mt-3">
                                <input type="email" placeholder="Correo Electrónico" />&nbsp;
                                <a href="#" className="btn btn-danger btn-rounded ml-9">Suscribete</a>
                            </div>
                            <input type="checkbox" id="polPri" /> <label htmlFor="polPri">He leído y acepto las políticas de privacidad</label>
                        </form>
                    </span>
                </div>
            </div>
            <hr />
            <footer className="page-footer font-small stylish-color-dark pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">GLOFLOX</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Aviso legal</a>
                                </li>
                                <li>
                                    <a href="#!">Política de privacidad</a>
                                </li>
                                <li>
                                    <a href="#!">Politica de cookies</a>
                                </li>
                                <li>
                                    <a href="#!">Condiciones de uso</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Ayuda</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Acerca de</a>
                                </li>
                                <li>
                                    <a href="#!">Centro de ayuda</a>
                                </li>
                                <li>
                                    <a href="#!">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Enlace</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Tienda Online</a>
                                </li>
                                <li>
                                    <a href="#!">Blogs</a>
                                </li>
                                <li>
                                    <a href="#!">Transformaciones</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Entrenamientos</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Retos</a>
                                </li>
                                <li>
                                    <a href="#!">Calendarios</a>
                                </li>
                                <li>
                                    <a href="#!">Plan de entrenamiento</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-ins mx-1">
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                </ul>
                    <div className="footer-copyright text-center">© 2021 Copyright&nbsp;
                        <a href="#">Gloflox</a>
                    </div>
                
            </footer>
        </div>
    );
}

export default Footer;