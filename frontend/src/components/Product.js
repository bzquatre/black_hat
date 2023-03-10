import React from "react";

/* REACT-BOOTSTRAP */
import { Card } from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";
import { PRODUCT_TOP_SUCCESS } from "../constants/productConstants";

/* COMPONENTS */
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={process.env.REACT_APP_API_URL+product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </Card.Text>

        <Card.Text as="h3">₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
