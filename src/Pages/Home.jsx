import CardImg from "../assets/Cheescake.svg";
import Cinnamonroll from "../assets/Chinnamonroll.svg";
import Capuchino from "../assets/Capuchino.svg";
import MainImg from "../assets/ImgMain.svg";
import AuthLayout from "../Layouts/AuthLayout";
import { Link } from "react-router-dom";
// import Navbar from '../Components/Navbar.jsx'
// import Footer from '../Components/Footer.jsx'

function Menu(props) {
  return (
    <div className=" shadow-2xl flex flex-col items-center max-w-80 h-auto mt-40 bg-white gap-5">
      <img src={props.url} alt="" width={1500} height={1500} className="" />
      <h1 className="font-poppins text-textandalan-0 text-3xl font-bold">
        {props.Name}
      </h1>
      <p className="font-poppins font-medium text-textandalan-0 text-center m-4 w-52">
        {props.deskripsi}
      </p>
    </div>
  );
}

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <AuthLayout>
        <div className="flex justify-center flex-col w-full mx-auto ">
          <img
            src={MainImg}
            className="bg-cover flex items-center justify-center"
          />
          <div className="flex flex-col gap-8 self-center mx-auto absolute items-center text-white font-bold font-poppins">
            <h2 className="text-5xl">
              Mari Nikmati Sepotong Roti Dan Secangkir Kopi
            </h2>
            <h4 className="text-3xl font-bold items-center flex flex-col justify-center gap-2">
              Selamat Datang Di Kafe Kita, Silahkan Klik Lanjut Untuk Memilih
              Spesial Menu Yang
              <span className="">Telah Kami Sediakan Untuk Kalian.</span>
            </h4>
            <Link
              to={"/MenuUtama"}
              className="border text-center p-4 m-4 rounded-full w-40 bg-BtnLanjut-0 text-white text-2xl hover:bg-gray-50 hover:text-slate-900 transition-all shadow-gray-700"
            >
              Lanjut
            </Link>
          </div>
        </div>
        <div className="flex bg-menuAndalan-0 flex-col mx-auto items-center w-full h-full">
          <h1 className="text-6xl text-white font-extrabold font-poppins mt-24 shadow-inherit">
            Menu Andalan Kami
          </h1>
          <div className="flex gap-40 mb-40">
            <Menu
              url={CardImg}
              Name="CheesCake"
              deskripsi="Kue lembut dengan cita rasa manis dan gurih dari keju dipadukan dengan segarnya buah"
            />
            <Menu
              url={Capuchino}
              Name="Capuchino"
              deskripsi="Secangkir kopi susu kaya rasa dengan aroma kuat cocok bagi pecinta kopi"
            />
            <Menu
              url={Cinnamonroll}
              Name="Chinnamon ROll"
              deskripsi="Roti gulung yang berisikan gula palem dengan bubuk kayu manis "
            />
          </div>
        </div>
      </AuthLayout>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
