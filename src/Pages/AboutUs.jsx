
import AuthLayout from "../Layouts/AuthLayout";
import ImgAboutUs from "../assets/ImgAboutUs.svg"

function AboutUs() {
  return(
    <AuthLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-poppins text-5xl text-black font-bold m-16">About Us</h1>
        <div className="flex flex-row w-full  mx-auto h-auto gap-10">
          <img src={ImgAboutUs} width={930} height={10} alt="" className=" " />
          <div className="font-poppins mx-auto self-center w-5/12 h-auto -mt-40 ">
          <h5 className=" text-black w-7/12 font-extralight  text-2xl">Kafe Kita bermula dari kecintaan kami terhadap kopi dan warisan budaya kafe. Sejak dibuka pertama kali pada tahun 2022, kami memahami bahwa kopi bukan hanya minuman, tetapi sebuah cerita yang mempertemukan orang dari berbagai lapisan masyarakat. Inspirasi kami datang dari kafe-kafe klasik di Eropa dan timur tengah, tempat di mana penulis, seniman, dan pemikir berkumpul untuk berbagi ide-ide mereka.</h5>
          <h2 className="font-bold text-4xl mt-11 text-black gap-4 w-full">Lezat, Cepat, Hemat <br /> <span className="text-3xl">
          Nikmati sajian berkulitas dengan<br /> harga pas
          </span>
          </h2>
          </div>
        </div>
        <div className="mt-40 flex mx-auto gap-40 w-auto h-auto self-center mb-20">
           <iframe className="item-center self-center mx-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d494.114764265816!2d112.0002073095865!3d-7.798494200109759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1719386243538!5m2!1sid!2sid" width={700} height={550} allowfullscreen="" loading="lazy" ></iframe>
            <div className="flex flex-col mx-auto border-2 text-black h-auto border-black p-10 px-36 gap-2 w-auto shadow-2xl">
              <div className="flex flex-col -ml-10 gap-2">
              <label className="mt-16">Nama</label>
              <input type="text" className="border border-slate-600  focus:outline-0 focus:decoration-transparent h-6 text-black"/>
              <label>Alamat</label>
              <input type="text" className="border border-slate-600 focus:outline-0 focus:decoration-transparent h-6 text-black"/>
              <label>Pesan</label>
              <input type="text" className="border border-slate-600 focus:outline-0 focus:decoration-transparent h-36 text-black"/>
              <button className="bg-menuAndalan-0 text-white w-24 mx-auto rounded-full hover:bg-BtnHoverMenu-0"><a href="">Kirim</a></button>
              </div>
            </div>
          
        </div>
      </div>
    </AuthLayout>
  )
}

export default AboutUs
