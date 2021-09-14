import React from "react";
import PropTypes from "prop-types";

const CardInicio = ({ title, image }) => (
    <>
        <div className="card col-auto mx-2 mt-3">
            <img src={image} className="card-img-top mt-3 image-card" alt="Ejercicio" />
            <div className="card-body">
                <p className="card-text">{title}</p>

            </div>
        </div>
    </>
)
CardInicio.propTypes = {
    title: PropTypes.string,
    imag: PropTypes.string,
}
export default CardInicio;