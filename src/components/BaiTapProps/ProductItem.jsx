import React, { Component } from "react";
import "./../../style.css";

export default class ProductItem extends Component {
  render() {
    const { image, name, price, alias, id } = this.props.item;
    return (
      <div className="shoesProduct mb-3">
        <img src={image} alt={alias} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button
          onClick={() => this.props.onGetProductDetail(this.props.item)}
          className="btn btn-dark"
        >
          View detail
        </button>
      </div>
    );
  }
}
