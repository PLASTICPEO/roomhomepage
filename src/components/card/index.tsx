import { useState } from "react";

const ShopCard: React.FC<{
  title: String;
  price: number;
  category: String;
  thumbnail: any;
}> = ({ title, price, category, thumbnail }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="flex flex-col font-League rounded-lg p-4"
    >
      <div className="relative cursor-pointer">
        <img
          className="rounded-lg object-fill w-full h-full"
          src={thumbnail}
          alt="card1"
        />
        {isHovered && (
          <div className="absolute bg-black/70 text-white flex flex-col justify-center top-0 left-0 w-full h-full px-5 rounded-md">
            <h2 className="text-xl">{title}</h2>
            <p>--</p>
            <p className="text-xs">{category}</p>
          </div>
        )}
      </div>
      <p className="text-sm text-[#D0CDD7] mt-4">{category}</p>
      <div className="flex flex-col">
        <p className="text-lg font-bold text-[#1F1F1F]">{title}</p>
        <p className="text-sm text-[#1F1F1F]">{price}</p>
      </div>
    </div>
  );
};

export default ShopCard;
