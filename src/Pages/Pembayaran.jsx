import DataMakanan from "@/Components/CardDataMakanan";
import DataMinuman from "@/Components/CardDataMinuman";
import { useDispatch, useSelector } from "react-redux";
import Back from "../assets/back.svg";

function Pembayaran() {
  const DataProduct = [DataMakanan, DataMinuman];
  const { chartData } = useSelector((state) => state.chart);
  DataProduct === chartData;
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <span className="absolute top-5 left-10">
          <button>
            <a href="/Keranjang">
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
      <div className=" mt-20">
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
                  <h1 className="font-poppins text-5xl w-full ml-5">
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
      <div className="border border-black w-6/12 p-2 rounded-xl mt-20">
        <form action="#">
          <h1>isi form</h1>
          <div>
            <h3>nama pemesan</h3>
            <input type="text" />
            <h3>Pilih tempat makan</h3>
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
                  <a href="/MenuMakanan">Makanan</a>
                </li>
                <li className="btn-outline rounded-full text-white">
                  <a href="/MenuMinuman">Minuman</a>
                </li>
              </ul>
            </div>
            <h3>Pilih metode pembayaran</h3>
          </div>
        </form>
      </div>
    </>
  );
}

export default Pembayaran;
