import React from "react";

const cart = localStorage.getItem('products');
let products = [];
let subtotal = 0;
let total = 0;
if (cart != null) {
    products = JSON.parse(cart);
    subtotal = products.map(p => p.precio).reduce((a, b) => +a + +b);
    total = subtotal + 200;
}

function removerProductoCarrito(event) {
    const type = event.target.type;
    if(type == undefined){
        event.target.parentNode.parentNode.parentNode.remove();
    }
    else{
        event.target.parentNode.parentNode.remove();
    }
    return true;
}

function compraExitosa() {
    alert('Compra Exitosa');
    localStorage.clear();
    window.location.href = "/tienda";
    return true;
}

const productLines = products.map(p =>
    <tr>
        <td><img src={p.image} height="100px" /> </td>
        <td>{p.title}</td>
        <td>In stock</td>
        <td><input className="form-control" type="text" defaultValue={1} /></td>
        <td className="text-right">${p.precio}</td>
        <td className="text-right">
            <button type="button" className="btn btn-sm btn-danger" onClick={removerProductoCarrito}>
                <i className="fa fa-trash" />
            </button>
        </td>
    </tr>
);

function Cart() {
    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">GLOFLOX</h1>
                </div>
            </section>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Disponibilidad</th>
                                        <th scope="col" className="text-center">Cantidad</th>
                                        <th scope="col" className="text-right">Precio</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productLines}
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        <td>Sub-Total</td>
                                        <td className="text-right">${subtotal}</td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        <td>Costo de Envio</td>
                                        <td className="text-right">${200.00}</td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td />
                                        <td />
                                        <td><strong>Total</strong></td>
                                        <td className="text-right"><strong>${total}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6">
                                <a className="btn btn-block btn-light" href="/tienda">Seguir Comprando</a>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase" onClick={compraExitosa}>Realizar Compra</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;