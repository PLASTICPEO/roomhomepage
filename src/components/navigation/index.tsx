import { Link } from "react-router-dom";
import Logo from "../logo";

const navItems = [
  { page: "home", path: "/" },
  { page: "shop", path: "/shop" },
  { page: "about", path: "/about" },
  { page: "contact", path: "/contact" },
];

const Header: React.FC<{ isWhite?: boolean }> = ({ isWhite = false }) => {
  return (
    <div className={`absolute top-0 left-0 xl:flex hidden space-x-12 m-10`}>
      <Logo isWhite={isWhite} />
      <ul
        className={`flex items-center text-lg justify-center space-x-8 font-League ${
          isWhite ? "text-[#FFFFFF]" : "text-[#080705]"
        }`}
      >
        {navItems.map((item: any, index: number) => {
          return (
            <Link key={index} to={item.path}>
              <li className="link link-underline link-underline-black ">
                {item.page}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
