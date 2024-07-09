import AuthLayout from "../Layouts/AuthLayout";
import cartmenu from "../assets/cartmenu.svg";
import MenuCard from "../Components/MenuCardMinuman";
import Search from "../assets/search.svg";
import { Link } from "react-router-dom";
function MenuMinuman() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-poppins text-5xl m-4 text-textutama font-bold">
          Makanan
        </h1>
        <div className=" flex w-64 items-center h-auto mx-auto justify-center gap-2">
          <input
            type="text"
            className="  border border-slate-600 rounded text-lg focus:decoration-transparent h-6 bg-white text-black "
            placeholder="Search"
          />
          <img src={Search} alt="" />
        </div>
        <label className="flex flex-col items-center justify-center">
          <h1 className="font-poppins text-textutama text-4xl italic font-bold mt-10 ">
            Menu <span className="text-black">Kami</span>
          </h1>
          <p className="font-poppins font-extralight text-black italic text-center">
            silahkan order dari menu yang kami sediakan ya sahabat senja
          </p>
        </label>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 rounded-2xl w-40 bg-btndropdown text-lg btn-outline text-white"
          >
            Select Menu{" "}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-btndropdown text-lg font-poppins font-normal"
          >
            <li className="btn-outline rounded-full text-white">
              <Link to="/MenuUtama/MenuMakanan">Makanan</Link>
            </li>
            <li className="btn-outline rounded-full text-white">
              <Link to="/MenuUtama/MenuMinuman">Minuman</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full items-center justify-center gap-30 mb-10">
          <MenuCard url2={cartmenu} />
        </div>
      </div>
    </AuthLayout>
  );
}

export default MenuMinuman;
