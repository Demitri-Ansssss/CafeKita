import DataMakanan from "@/Components/CardDataMakanan";
import DataMinuman from "@/Components/CardDataMinuman";
import { useDispatch, useSelector } from "react-redux";
import Back from "../assets/back.svg";
import Dropdown from "@/Components/Dropdown";

function Pembayaran() {
  const DataProduct = [DataMakanan, DataMinuman];
  const { chartData } = useSelector((state) => state.chart);
  DataProduct === chartData;
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <span className="absolute top-5 left-10">
          <button>
            <a href="/">
              <img src={Back} alt="" width={40} />
            </a>
          </button>
        </span>
        <h1 className="font-poppins text-5xl m-4 text-black font-normal">
          Pembayaran
        </h1>
        <p className="font-poppins text-lg m-4 text-black font-medium">
          silahkan cek pembelian dan klik Lanjut untuk melakukan pembayaran
        </p>
      </div>
      <div className=" mt-20 text-black flex flex-col gap-20 ml-40 justify-around mx-auto">
        {chartData?.map((data, index) => (
          <>
            <div
              key={index}
              className="flex justify-around w-6/12 p-2 border rounded-xl items-center"
            >
              <img
                src={data.img}
                alt=""
                className=" shadow-2xl bg-neutral-200 p-10"
                width={300}
                height={200}
              />
              <div>
                <div className="flex flex-col ml-10 w-96 items-center self-center justify-center">
                  <h1 className="font-poppins text-4xl w-full ml-5">
                    {data.title}
                  </h1>
                  <p className=" flex gap-2 ml-10 font-poppins text-xl font-bold text-center relative z-50 right-32">
                    <h5>X 1</h5>
                    <h5>Rp. {data.harga.toFixed(3)}</h5>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="border border-black text-black w-6/12 p-2 rounded-xl mt-20 ml-40">
        <form action="#">
          <h1 className="font-poppins text-4xl font-medium">isi form</h1>
          <div>
            <h3 className="font-poppins font-medium text-xl">nama pemesan</h3>
            <input
              type="text"
              className=" bg-white border focus-visible:none w-96 h-8"
            />
            <h3 className="font-poppins font-medium text-xl">
              Pilih tempat makan
            </h3>
            <Dropdown />
            <h3 className="font-poppins font-medium text-xl">
              Pilih metode pembayaran
            </h3>
            <div className=" mt-5">
              <a
                href="/"
                className="border-2 p-2 rounded-full w-36 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-textutama text-white hover:bg-orange-300 hover:text-gray-500 transition-all"
              >
                Tunai
              </a>
              <a
                href="/"
                className="border-2 p-2 rounded-full w-36 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-textutama text-white hover:bg-orange-300 hover:text-gray-500 transition-all"
              >
                Qris
              </a>
              <a
                href="/"
                className="border-2 p-2 rounded-full w-36 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-textutama text-white hover:bg-orange-300 hover:text-gray-500 transition-all"
              >
                Selesai
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Pembayaran;
