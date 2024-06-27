import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { deleteChartDataByTitle } from "@/lib/redux/api/chart.slice";
import { useDispatch, useSelector } from "react-redux";

function Keranjang() {
  const { chartData } = useSelector((state) => state.chart);
  const dispatch = useDispatch()

  function handleDeleteFromChart(tittle) {
    dispatch(deleteChartDataByTitle(tittle));
    alert("Deleted from chart")
  }
  return (
    <Sheet>
      <SheetTrigger id="openChart" className="hidden"></SheetTrigger>
      <SheetContent className="bg-slate-50">
        <SheetHeader>
          <SheetTitle>Chart</SheetTitle>
          <div className="flex flex-col gap-2">
            {chartData?.map((data, index) => (
              <div key={index} className="grid grid-cols-3 p-4 border rounded-xl items-center">
                <h1>{data.title}</h1>
                <h1 className="text-center">{data.harga}</h1>
                <div className="w-full flex justify-end items-center">
                  <button onClick={() => handleDeleteFromChart(data.title)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Keranjang;
