import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  handleGetProductDetail = (product) => {
    this.props.onGetProductDetail(product);
  };
  renderProduct = () => {
    let shoes = this.props.data.map((itemShose, index) => {
      return (
        <div className="col-4" key={itemShose.id}>
          <ProductItem
            item={itemShose}
            onGetProductDetail={this.handleGetProductDetail}
          />
        </div>
      );
    });
    return shoes;
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Shoes shop</h1>
        <div className="container">
          <div className="row">{this.renderProduct()}</div>
        </div>
      </div>
    );
  }
}
