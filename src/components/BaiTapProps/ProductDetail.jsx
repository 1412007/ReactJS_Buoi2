import React, { Component } from "react";

export default class extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        {product ? (
          <div className="mt-5">
            <h3>Product Detail</h3>
            <div className="row">
              <div className="col-4">
                <img
                  src={product.image}
                  alt={product.alias}
                  width={100 + "%"}
                />
              </div>
              <div className="col-8">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="text-danger fs-4">${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          </div>
        ) : (
          "Please choose one product"
        )}
      </>
    );
  }
}
