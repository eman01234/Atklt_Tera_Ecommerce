import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../constant/ProductConstant";

function ProductList() {
  return (
    <div className="text-center p-8">
      <h2 className="mb-20 font-bold justify-center text-center w-full text-4xl ">
        Available Products
      </h2>
      <div className="flex flex-wrap justify-center gap-20">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="no-underline"
          >
            <div className="bg-white border border-gray-300 rounded-lg p-5 w-[300px] shadow-md text-left cursor-pointer">
              <img
                className="w-full rounded-lg mb-2.5 h-72 object-contain"
                src={product.image}
                alt={product.name}
              />
              <h3 className="text-2xl mb-2.5">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-base mb-2.5">{product.price}</p>
              <a
                href="/Cart"
                className="bg-primary text-white py-2 px-5 no-underline rounded text-lg hover:bg-amber-400"
              >
                Add to Cart
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
