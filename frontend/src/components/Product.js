import React from "react";

/* REACT-BOOTSTRAP */
import { Card ,Button} from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import Rating from "./Rating";

import "./Product.css"
function Product({ product }) {
  return (
    
<Card className="h-100 shadow-sm">
        <Card.Img src={product.image} />
        <div className="label-top shadow-sm">{product.brand}</div>
        <Card.Body>
          <div className="clearfix mb-3">
            <span className="float-start badge rounded-pill bg-success">
            {product.price}DZ
            </span>
            <span className="float-end">
              <a href="#" className="small text-muted">
              <Rating
                value={product.rating}
                text={`${product.numReviews}`}
                color={"#f8e825"}
              />
              </a>
            </span>
          </div>
          <Card.Title>
               {product.name}
          </Card.Title>
          <div className="text-center my-4">
          <Link to={`/product/${product._id}`}>
              <Button variant="warning">Check offer</Button>
          </Link>
            
          </div>
        </Card.Body>
      </Card>
  );
}

export default Product;
/*
<Card className="my-3 p-3 rounded">
<Link to={`/product/${product._id}`}>
  <Card.Img src={product.image} />
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
*/