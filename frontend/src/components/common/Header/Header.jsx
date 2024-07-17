import React from "react";

import Search from "../../screens/productList/Search"; // Import the Search component
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import { menu } from "../../../constant/Headerconstant";
import { Avater } from "../../../assets/images/Index";

const Header = () => {
  // Separate the "Account" item from the rest of the menu
  const accountItem = menu.find((item) => item.name === "Account");
  const otherItems = menu.filter((item) => item.name !== "Account");

  return (
    <div>
      <header className="flex justify-between items-center px-8 py-2 border-b-2">
        <div className="flex items-center">
          <div className="text-3xl font-serif text-primary">ATKLT TERA</div>
          <nav className="ml-20">
            {" "}
            {/* Adjust the margin as needed */}
            <ul className="flex gap-8">
              {otherItems.map((list) => (
                <li key={list.id} className="">
                  <a
                    href={list.Link}
                    className="flex items-center gap-2 hover:text-red-700"
                  >
                    {list.name} {list?.Icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Search /> {/* Include the Search component here */}
          {accountItem && (
            <div className="flex items-center gap-2">
              <a
                href={accountItem.Link}
                className="flex items-center gap-2 hover:text-red-700"
              >
                <img
                  className="w-20 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={Avater}
                  alt="Bordered avatar"
                />

                {/* {accountItem.name} {accountItem.Icon} */}
              </a>
              <span>|</span> {/* Add separator */}
              <Link
                to="/CartItems"
                className="flex items-center gap-2 hover:text-red-700"
              >
                <FaShoppingCart />
                Cart
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
