function Carddesign({ title, price, category, image }) {
  return (
    <div className=" border rounded-2xl py-4 px-4 flex justify-between gap-2  shadow-2xl hover:bg-purple-50 ">
      <div>
        <img
          className="w-20 h-20 rounded-xl object-cover"
          src={image}
          alt="images of products"
        />
      </div>

      <div className="flex flex-col justify-between gap-2">
        <h2 className="text-sm">{title}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>{price}</p>
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-sm">in stock 40</p>
        <div className="flex ">
          <p className="text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Carddesign;
