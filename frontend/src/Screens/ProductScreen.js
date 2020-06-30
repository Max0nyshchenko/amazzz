import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find(
    (item) => item.id == props.match.params.id
  );
  console.log(product);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.img} alt="product image" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price} </li>
            <li>Status: {product.status} </li>
            <li>
              Qty:{" "}
              <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </li>
            <li>
              <button className="primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
