import ShopCard from "../../components/card";
import chair1Img from "../../assets/chairs/chair1Img.jpeg";
import chair2Img from "../../assets/chairs/chair2Img.jpeg";
import chair3Img from "../../assets/chairs/chair3Img.jpeg";
import chair4Img from "../../assets/chairs/chair4Img.jpeg";
import chair5Img from "../../assets/chairs/chair5Img.jpeg";
import chair6Img from "../../assets/chairs/chair6Img.jpeg";
import chair7Img from "../../assets/chairs/chair7Img.jpeg";
import chair8Img from "../../assets/chairs/chair8Img.jpeg";

const chairs = [
  {
    title: "Modern Velvet Chair",
    price: "$199",
    category: "Velvet, Blue",
    thumbnail: chair1Img,
  },
  {
    title: "Vintage Leather Chair",
    price: "$249",
    category: "Leather, Brown",
    thumbnail: chair2Img,
  },
  {
    title: "Contemporary Plastic Chair",
    price: "$79",
    category: "Plastic, White",
    thumbnail: chair3Img,
  },
  {
    title: "Industrial Metal Chair",
    price: "$149",
    category: "Metal, Black",
    thumbnail: chair4Img,
  },
  {
    title: "Elegant Wooden Chair",
    price: "$169",
    category: "Wood, Mahogany",
    thumbnail: chair5Img,
  },
  {
    title: "Minimalist Fabric Chair",
    price: "$129",
    category: "Fabric, Grey",
    thumbnail: chair6Img,
  },
  {
    title: "Classic Rattan Chair",
    price: "$189",
    category: "Rattan, Natural",
    thumbnail: chair7Img,
  },
  {
    title: "Scandinavian Style Chair",
    price: "$219",
    category: "Wood, White",
    thumbnail: chair8Img,
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-4 grid-col-1 h-screen w-full py-24">
        {chairs.map((item: any, index: number) => {
          return (
            <div key={index}>
              <ShopCard
                title={item.title}
                category={item.category}
                price={item.price}
                thumbnail={item.thumbnail}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
