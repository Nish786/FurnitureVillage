import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

import Bis from "../logos/logos/bismilla.jpg";
import "./Bismilla.css";

import ReactSlider from "../components/ReactSlider";

const Bismilla = ({ match, history }) => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <div>
      <div>
        <h1>Welcome to Bismilla</h1>

        <div>
          <img src={Bis} alt="" id="logo" />
        </div>

        <div>
          <h2 className="list-title">
            Trending <b>Products</b>
          </h2>
          <ReactSlider>
            {products.map((product) => (
              <Product product={product} match={match} history={history} />
            ))}
          </ReactSlider>
        </div>
      </div>
    </div>
  );
};

export default Bismilla;
