import React, { useEffect, useState } from "react";
import TableView from "./TableView";
import CardView from "./CardView.jsx";

function Data({ toggleView }) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full mx-auto  p-15 bg-gray-100 rounded-2xl">
      {!toggleView ? (
        <TableView products={products} handleDelete={handleDelete} />
      ) : (
        <CardView products={products} handleDelete={handleDelete} />
      )}
      
    </div>
  );
}

export default Data;


