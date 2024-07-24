import React, { useState } from "react";
import Search from "../../screens/productList/Search";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UserPen } from "lucide-react";
import { menu } from "../../../constant/Headerconstant";
import { Avater } from "../../../assets/images/Index";
import { MdMessage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  // Separate the "Account" item from the rest of the menu
  const accountItem = menu.find((item) => item.name === "Account");
  const otherItems = menu.filter((item) => item.name !== "Account");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <header className="flex justify-between items-center px-8 py-2 border-b-2">
        <div className="flex items-center">
          <div className="text-3xl font-serif text-primary">ATKLT TERA</div>
          <nav className="ml-20">
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
            <div className="relative flex items-center gap-2">
              {isAuth ? (
                <>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-red-700 relative"
                    onClick={toggleDropdown}
                  >
                    <img
                      className="w-20 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={Avater}
                      alt="Bordered avatar"
                    />
                    <IoIosArrowDown className="text-xl  transform -translate-y-1/2" />
                  </a>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-44 w-48 bg-white rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li>
                          <Link
                            to="/UserProfile"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/UserSettings"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Setting
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/Logout"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  <span>|</span>
                  <Link
                    to="/CartItems"
                    className="flex items-center gap-2 hover:text-red-700"
                  >
                    <FaShoppingCart />
                    Cart
                  </Link>
                </>
              ) : (
                <Link
                  to="/signUp"
                  className="flex items-center gap-2 hover:text-red-700"
                >
                  Login
                  <UserPen />
                </Link>
              )}
              {/* {accountItem.name} {accountItem.Icon} */}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
