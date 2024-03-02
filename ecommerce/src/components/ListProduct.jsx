import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import products from "./../products.json";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <h3>Featured Products</h3>
      <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item) => (
          <div className="product shadow-xl p-3 flex gap-3" key={item.id}>
            <div className="image w-1/4">
              <img
                src={item.thumbnail}
                alt=""
                className="size-32 object-cover rounded-md"
              />
            </div>
            <div className="info w-3/4">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-sm opacity-70">{item.description}</p>
              <Link to={`/${item.id}`}>
                <button className="btn mt-5 px-3 py-1 text-sm bg-blue-500 text-white rounded-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
