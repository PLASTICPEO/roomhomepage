import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { page: "home", path: "/" },
  { page: "shop", path: "/shop" },
  { page: "about", path: "/about" },
  { page: "contact", path: "/contact" },
];

const CustomMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className="xl:hidden block z-50">
      {isActive ? (
        <motion.div
          initial={{ opacity: 10, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "anticipate",
            duration: 1,
            x: { duration: 0.5 },
          }}
          dragConstraints={{ left: -100, right: 100 }}
          className="absolute flex items-center justify-center space-x-12 h-20 w-full bg-[#FFFFFF] rounded-br-md border-b-[1px] broder-[black] shadow-md

          "
        >
          <button onClick={toggleMenu}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <ul className="flex items-center justify-center space-x-6 font-League text-[black] ">
            {navItems.map((item: any, index: number) => {
              return (
                <Link key={index} to={item.path}>
                  <li className="text-black text-xl">{item.page}</li>
                </Link>
              );
            })}
          </ul>
        </motion.div>
      ) : (
        <button className="absolute m-5  text-black" onClick={toggleMenu}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      )}
    </div>
  );
};

export default CustomMenu;
