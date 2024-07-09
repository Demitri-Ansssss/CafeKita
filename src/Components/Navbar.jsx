import Cart from "../assets/cart-shopping.svg";
import { Link } from "react-router-dom";
export default function App() {
  function handleOpenChart() {
    document.getElementById("openChart").click();
  }

  return (
    <div className=" bg-textutama">
      <div className="container flex  justify-between mx-auto w-auto p-4">
        <a
          href="/Home"
          className="hover:text-slate-600 hover:scale-110 transition-all"
        >
          <h1 className="text-4xl font-extrabold text-black italic font-poppins transition-all ">
            Kafe<span className="text-white">Kita</span>
          </h1>
        </a>
        <div className="w-auto  gap-20 flex justify-beetwen self-center font-semibold text-xl h-8  content-center leading-loose text-black font-poppins">
          <Link
            to="/"
            className="hover:border-b-4 hover:scale-110 hover:text-white transition-all "
          >
            Home
          </Link>
          <Link
            to="/MenuUtama"
            className="hover:border-b-4 hover:scale-110 hover:text-white transition-all"
          >
            Menu
          </Link>
          <Link
            to="/AboutUs"
            className="hover:border-b-4 hover:scale-110  hover:text-white transition-all"
          >
            About Us
          </Link>
        </div>
        <div className="transition-all hover:scale-125">
          <button
            className="flex justify-center content-center"
            onClick={handleOpenChart}
          >
            <img src={Cart} />
          </button>
        </div>
      </div>
    </div>
  );
}
