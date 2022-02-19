import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { projects } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((project) => (
          <Product key={project.id} link={project.link} img={project.img} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
