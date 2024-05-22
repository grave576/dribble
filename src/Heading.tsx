import "./index.css";
import constImage from "./assets/const.jpg";
type Props = {};

function Header({}: Props) {
  return (
    <>
      {/* heading image */}
      <div className="relative">
        {/* Heading image */}
        <img src={constImage} alt="" className="w-full" />

        {/* Search bar */}
        <div className="absolute top-0 left-0 w-full flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      {/* Cards */}
      <div className="flex justify-between items-center ">
        <p className="hover:bg-gray-200 h-10 cursor-pointer w-full text-center">
          building & construction
        </p>
        <p className="hover:bg-gray-200 h-10 cursor-pointer w-full text-center">
          suplies
        </p>
        <p className="hover:bg-gray-200 h-10 cursor-pointer w-full text-center">
          properties
        </p>
        <p className="hover:bg-gray-200 h-10 cursor-pointer w-full text-center">
          Deals
        </p>
      </div>
    </>
  );
}

export default Header;
