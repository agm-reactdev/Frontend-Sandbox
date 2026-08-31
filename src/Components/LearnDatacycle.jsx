import { useEffect, useState } from "react";
import axios from "axios";

function Learndatacycle() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}&per_page=4`)
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      });
  }, [page]);

  function prev() {
    setPage(page - 1);
  }

  function next() {
    setPage(page + 1);
  }
  return (
    <div>
      <h1 className="text-center text-4xl mb-4 mt-4">Data Pagination</h1>
      {product.map((item) => (
        <div
          className="flex justify-between items-center px-4 py-4"
          key={item.id}
        >
          <p>{item.id}</p>
          <p>{item.email}</p>
          <p>{item.first_name}</p>
          <p>{item.last_name}</p>
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={item.avatar}
            alt=""
          />
        </div>
      ))}

      <div className="flex gap-6 bg-gray-200 mt-6 justify-center py-4">
        <button
          className="border border-black rounded-xl px-4 py-1 hover:bg-purple-300"
          onClick={prev}
          disabled={page === 1}  
        >
          perve
        </button>

        <p className="bg-white px-4 py-2 ">{page}</p>

        <button
          className="border border-black rounded-xl px-4 py-1  hover:bg-purple-300"
          onClick={next}
          disabled={page === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Learndatacycle;
