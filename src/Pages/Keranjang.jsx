import DataMakanan from "@/Components/CardDataMakanan";
import Trash from "../assets/Trash.svg";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { deleteChartDataByTitle } from "@/lib/redux/api/chart.slice";
import { useDispatch, useSelector } from "react-redux";
import DataMinuman from "@/Components/CardDataMinuman";

function Keranjang(data) {
  const DataProduct = [DataMakanan, DataMinuman];
  const { chartData } = useSelector((state) => state.chart);
  DataProduct === chartData;
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  function handleDeleteFromChart(id) {
    dispatch(deleteChartDataByTitle(id));
    alert("Deleted from chart");
  }
  return (
    <Sheet>
      <SheetTrigger id="openChart" className="hidden"></SheetTrigger>
      <SheetContent className="bg-slate-50">
        <SheetHeader className=" flex justify-around w-full h-full mx-auto s">
          <div className="flex flex-col gap-10 items-center w-auto h-auto">
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
                      <p className="font-poppins text-xl font-bold text-center relative z-50 right-32">
                        <h5>Rp. {data.harga.toFixed(3)}</h5>
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end gap-2 items-center">
                    <div className="flex space-x-4 w-34 h-4 p-5 text-5xl justify-between rounded-3xl border-4">
                      <button
                        className=" cursor-pointer select-none -top-8 relative"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <p className="font-poppins font-bold text-xl -top-4 relative">
                        {count}
                      </p>
                      <button
                        className=" cursor-pointer select-none -top-8 relative"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => handleDeleteFromChart(data.id)}>
                      <img src={Trash} alt="" />
                    </button>
                  </div>
                </div>
              </>
            ))}
            <div className="relative -right-80 mt-5 w-72 font-bold items-center justify-center flex flex-col">
              <h1 className="text-black font-poppins text-2xl">
                Total Harga{" "}
                {chartData?.reduce((a, b) => a + b.harga, 0).toFixed(3)}
              </h1>
              <button
                className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                href="/Pembayaran"
              >
                <a href="/Pembayaran">Beli Sekarang</a>
              </button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Keranjang;
