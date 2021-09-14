import React from "react";
import PropTypes from "prop-types";

function addCart(event) {

    const title = event.target.getAttribute('data-title');
    const precio = event.target.getAttribute('data-precio');
    const image = event.target.getAttribute('data-image');

    const product = { "title": title, "precio": precio, "image": image };

    let cart = [];
    const arrayProducts = localStorage.getItem('products');

    if (arrayProducts != null) {
        cart = JSON.parse(arrayProducts);
    }
    cart.push(product);
    localStorage.setItem('products', JSON.stringify(cart));
    alert('Tu producto se agrego al carrito');

}
const CardProductos = ({ title, image, precio }) => (
    <>
        <div className="cardcard col-3 mx-2 mt-3">
            <img src={image} className="card-img-top mt-3 image-cardTienda" alt="Productos" />
            <div className="card-body">
                <p className="card-text">{title}</p>
                <div className="card-body">
                    <p className="card-text price-text">${precio}</p>
                    <a href="#" className="btn btn-primary"
                        data-title={title}
                        data-image={image}
                        data-precio={precio}
                        onClick={addCart}
                    >Agregar al carrito</a>
                </div>
            </div>
        </div>
    </>
)

CardProductos.propTypes = {
    title: PropTypes.string,
    imag: PropTypes.string,
    precio: PropTypes.number,
}

export default CardProductos;