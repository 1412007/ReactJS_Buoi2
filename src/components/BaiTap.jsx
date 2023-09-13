import React, { Component } from "react";
import "./../style.css";
import glassesData from "./../dataGlasses.json";

export default class BaiTap extends Component {
  state = {
    imgProduct: "",
  };
  renderProduct = () => {
    let dataGlasses = glassesData.map((data) => {
      return (
        <div key={data.id} className="item col-3">
          <div className="itemContent">
            <button
              className="btn"
              onClick={() => {
                this.setState({
                  imgProduct: data.url,
                });
              }}
            >
              <img src={data.url} alt={data.name} />
            </button>
          </div>
        </div>
      );
    });
    return dataGlasses;
  };
  render() {
    return (
      <div>
        <header className="header">
          <div className="container-fluid">
            <h2 className="text-white text-center">TRY GLASSES APP ONLINE</h2>
          </div>
        </header>
        <div className="container model">
          <img src="glassesImage/model.jpg" alt="model" />
          <div className="glasses">
            <img src={this.state.imgProduct} alt="" />
          </div>
        </div>
        <div className="container products">{this.renderProduct()}</div>
      </div>
    );
  }
}
