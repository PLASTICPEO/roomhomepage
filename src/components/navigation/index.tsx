import { Link } from "react-router-dom";

const navItems = [
  { page: "home", path: "/" },
  { page: "shop", path: "/shop" },
  { page: "about", path: "/about" },
  { page: "contact", path: "/contact" },
];

const NavigationComponent = () => {
  return (
    <div>
      <ul className="flex items-center justify-center space-x-4 font-League text-[#FFFFFF] ">
        {navItems.map((item: any, index: number) => {
          return (
            <Link key={index} to={item.path}>
              <li className="link link-underline link-underline-black text-black">
                {item.page}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationComponent;
