import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../constant/ProductConstant";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <img
        className="w-full rounded-lg mb-8 h-96 object-contain"
        src={product.image}
        alt={product.name}
      />
      <div className="bg-white border border-gray-300 rounded-lg p-8 w-full max-w-2xl shadow-md">
        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <button className="bg-primary text-white py-2 px-5 rounded text-lg hover:bg-amber-400">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
