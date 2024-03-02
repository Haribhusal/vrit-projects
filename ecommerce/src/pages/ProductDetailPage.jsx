import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getSingleProductDetail() {
      let response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      console.log(response);
      setSingleProduct(response.data);
    }
    getSingleProductDetail();
  }, [params.id]);

  return (
    <div>
      The product Id received from Product List is{" "}
      <span className="bg-yellow-400">{params.id}</span>
      <span className="bg-yellow-400">
        The product name is {singleProduct.title}
      </span>
    </div>
  );
};

export default ProductDetailPage;
