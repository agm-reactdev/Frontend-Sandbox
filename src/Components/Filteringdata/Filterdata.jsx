import { useState } from "react";

function Filterdata() {
  const [search, setSearch] = useState("");

  const Data = [
    { id: 1, name: "Shirt", price: 1200 },
    { id: 2, name: "Pants", price: 2500 },
    { id: 3, name: "Shoes", price: 4000 },
    { id: 4, name: "Watch", price: 1500 },
    { id: 5, name: "Cap", price: 500 },
    { id: 6, name: "batool", price: 1200 },
    { id: 7, name: "jon", price: 2500 },
    { id: 8, name: "alberto", price: 4000 },
    { id: 9, name: "zik", price: 1500 },
    { id: 10, name: "pioanoo", price: 500 },
    { id: 11, name: "cylo", price: 1200 },
    { id: 12, name: "agm", price: 2500 },
    { id: 13, name: "waheed", price: 4000 },
    { id: 14, name: "saiqa", price: 1500 },
    { id: 15, name: "amna", price: 500 },
    { id: 16, name: "rasma", price: 1200 },
    { id: 17, name: "qasim", price: 2500 },
    { id: 18, name: "yahya", price: 4000 },
    { id: 19, name: "zahid", price: 1500 },
    { id: 20, name: "zakir", price: 500 },
    {id: 21, name: "xtra", price: 200}
  ];

  const filterdata = Data.filter((data) =>
    data.name.toLocaleLowerCase().includes(search),
  );
  console.log(filterdata);
  return (
    <div >
        <h1 className="text-center text-4xl mt-2 mb-4">Search Data Filtering</h1>
      <input
        className="border  w-full py-2 px-4 text-center text-2xl  "
        placeholder="Type Any Alfhabets"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterdata.map((filter) => (
        <p className="text-center text-2xl mt-4 border border-blue-300 px-4 py-2 " key={filter.id}>{filter.name}</p>
      ))}
    </div>
  );
}

export default Filterdata;
