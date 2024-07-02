import PropTypes from "prop-types";
import DataMakanan from "./CardDataMakanan";
// import DataMinuman from "./CardDataMinuman";
import { useDispatch } from "react-redux";
import { addChartData } from "@/lib/redux/api/chart.slice";

const MenuCard = (props) => {
    const dispatch = useDispatch()
    function handleAddToCart(data) {
        dispatch(addChartData({
          id : Math.floor(Math.random() * 10),
          title : data.title,
          img : data.img,
          harga : data.harga

        }))
    }   
  return (
    <div>
      <div className="grid grid-cols-3 gap-20 w-full h-auto mt-24 bg-white  rounded-2xl ">
        {DataMakanan.map((data) => (
          <>
            <div>
              <div className=" flex flex-col items-center justify-center shadow-2xl ">
                <div className="flex flex-col justify-center items-center h-auto gap-2 text-black">
                  <img
                    src={data.img}
                    alt=""
                    width={400}
                    height={400}
                    className=" "
                  />
                  <h1 className="font-poppins text-textandalan-0 text-xl font-bold">
                    {data.title}
                  </h1>
                  <p className="font-poppins text-xl font-bold text-textandalan-0 text-center  w-full">
                    <h5>Rp. {data.harga.toFixed(3)}</h5>
                  </p>
                </div>
                <div className="flex w-auto h-auto justify-center self-cente mx-auto gap-4 items-center">
                  <button onClick={() => handleAddToCart(data)}>
                    <img
                      src={props.url2}
                      alt=""
                      width={50}
                      height={50}
                      className=" -mt-5 hover:scale-125 transition-all  "
                    />
                  </button>
                  {/* Modal */}
                  <label htmlFor="my_modal_6" className="border-2 p-2 rounded-full w-36 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-textutama text-white hover:bg-orange-300 hover:text-gray-500 transition-all">Detail</label>
                  <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                  <div className="modal" role="dialog">
                    <div className="modal-box">
                      <h3 className="text-lg font-bold">Hello!</h3>
                      <img src={data.img} alt="" />
                      <p className="py-4">This modal works with a hidden checkbox!</p>
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="border-2 p-2 rounded-full w-36 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-textutama text-white hover:bg-orange-300 hover:text-gray-500 transition-all"
                  >
                    Bayar
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
