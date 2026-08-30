import Carddesign from "./Carddesign";

function Dynamicapicard() {
  const productsData = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      category: "men's clothing",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      category: "men's clothing",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      category: "men's clothing",
      image:
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&auto=format&fit=crop",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      category: "men's clothing",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      category: "jewelery",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      category: "jewelery",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&auto=format&fit=crop",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      category: "jewelery",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive Portable External Hard Drive",
      price: 114,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&auto=format&fit=crop",
      rating: { rate: 4.8, count: 400 },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop",
      rating: { rate: 2.9, count: 250 },
    },
    {
      id: 14,
      title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
      price: 999.99,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&auto=format&fit=crop",
      rating: { rate: 2.2, count: 140 },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      category: "women's clothing",
      image:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop",
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      category: "women's clothing",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
      rating: { rate: 2.9, count: 340 },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      category: "women's clothing",
      image:
        "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop",
      rating: { rate: 3.8, count: 679 },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      category: "women's clothing",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop",
      rating: { rate: 4.7, count: 130 },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      category: "women's clothing",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop",
      rating: { rate: 4.5, count: 146 },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      category: "women's clothing",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop",
      rating: { rate: 3.6, count: 145 },
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-10 mb-10">
          Dynamic Card Design
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 ">
        {productsData.map((item) => (
          <Carddesign
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
            rating={item.rating.count}
          />
        ))}
      </div>
    </>
  );
}

export default Dynamicapicard;
