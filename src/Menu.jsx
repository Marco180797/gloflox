import React from "react";

function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/inicio">GLOFLOX</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/inicio">Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Plan de Entrenamiento<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Entrenamiento Mensual</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tienda">Tienda Online</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nutricion</a>
                        </li>
                    </ul>
                    <form className="d-flex form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />&nbsp;
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        <a className="btn" href="/login"><i class="fas fa-user"></i></a>
                        <a className="btn" href="/cart"><i class="fas fa-shopping-cart"></i></a>
                    </form>
                </div>
            </nav>
        </div>

    );
}
export default Menu;