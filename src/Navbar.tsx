import "./index.css";
import { useState, useEffect } from "react";

type Props = {};

function Navbar({}: Props) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsSearchVisible(true);
      } else {
        setIsSearchVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="flex justify-between fixed top-0 z-30 w-full py-6 bg-blue-800">
          <div className="flex justify-between items-center w-full px-10 text-white ">
            {/* left side */}
            <div className="flex items-center">INDIAMART</div>
            {/* search */}
            <div
              className={`flex w-4/6 items-center mx-auto ${
                isSearchVisible ? "" : "invisible"
              }`}
            >
              <input
                type="text"
                placeholder="Enter product/ service to search"
                className="px-2 w-full border-gray-300"
              />
              <button className=" bg-green-700 text-white px-2 rounded-r-md hover:bg-green-900">
                Search
              </button>
            </div>
            {/* rhs */}
            <div className="flex gap-8 text-sm">
              <p>Home</p>
              <p>Deals</p>
              <p>sell</p>
              <p>contact</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;