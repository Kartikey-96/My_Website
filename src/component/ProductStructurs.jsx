import React from "react";

function ProductStructurs(props) {
  const { id, price, image, description, title } = props.object;
  return (
    <div className="col-sm-3 postion">
      <div className="card">
        <img src={image} className="card-img-top" />
        <p class="card-title">{title}</p>
        <h3 class="card-title">
          <span>&#8377;</span> {price}
        </h3>

        <a href="#" class="btn btn-primary btn-block">
          Select
        </a>
      </div>
    </div>
  );
}

export default ProductStructurs;
