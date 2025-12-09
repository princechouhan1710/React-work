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




// import React, { useEffect, useState } from "react";

// function Data({ toggleView }) {
//   let [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const handleDelete = (id) => {
//     setProducts(products.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="w-[80%] mx-auto my-5">

//       {/* ================= TABLE VIEW ================= */}
//       {!toggleView && (
//         <table className="border border-gray-400 w-full" cellPadding="10">
//           <thead>
//             <tr className="bg-gray-400 h-10 text-xl text-center">
//               <th>ID</th>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Body</th>
//               <th>Delete</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((item) => (
//               <tr key={item.id} className="border border-gray-400">
//                 <td className="text-center border">{item.id}</td>

//                 <td className="text-center border">
//                   <img
//                     src={`https://picsum.photos/seed/${item.id}/50/50`}
//                     className="m-auto"
//                   />
//                 </td>

//                 <td className="text-center border">{item.title}</td>
//                 <td className="text-center border">{item.body}</td>

//                 <td className="text-center border">
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* ================= CARD VIEW ================= */}
//       {toggleView && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="border p-4 rounded shadow bg-white"
//             >
//               <img
//                 src={`https://picsum.photos/seed/${item.id}/200/150`}
//                 className="w-full rounded"
//               />

//               <h2 className="text-lg font-bold mt-2">{item.title}</h2>
//               <p className="text-sm mt-1">{item.body}</p>

//               <button
//                 onClick={() => handleDelete(item.id)}
//                 className="bg-red-600 text-white px-3 py-1 rounded mt-3"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Data;
