// import Navbar from '../Components/Navbar.jsx'
// import Footer from '../Components/Footer.jsx'
import ImgMakanan from '../assets/MenuMakanan.svg'
import ImgMinuman from '../assets/MenuMinuman.svg'

import AuthLayout from "../Layouts/AuthLayout"

function MenuUtama() {
  return (
    
     <AuthLayout>
        <div className='flex flex-col'>
          <label className='flex flex-col items-center' >
            <h1 className='font-poppins text-textandalan-0 text-5xl font-bold mt-10 '>Menu <span className='text-black'>Kami</span></h1>
            <p className='font-poppins font-extralight text-black italic text-center'>silahkan order dari menu yang kami sediakan ya sahabat</p>
          </label>
          <div className='flex items-center justify-center mb-32 gap-96'>
            <div className=' shadow-2xl flex flex-col items-center w-auto h-auto mt-16 bg-white gap-2'>
              <img src={ImgMakanan} alt="" width={400} height={400} className=' ' />
              <h1 className='font-poppins text-textandalan-0 text-4xl font-bold'>Makanan</h1>
              <a href="/MenuMakanan" className='border-2 p-2 rounded-full w-40 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-menuAndalan-0 text-white hover:bg-BtnHoverMenu-0 hover:text-gray-500 transition-all'>Lihat</a>
            </div>
            <div className=' shadow-2xl flex flex-col items-center w-auto h-auto mt-16 bg-white gap-2'>
              <img src={ImgMinuman} alt="" width={400} height={400} className=' ' />
              <h1 className='font-poppins text-textandalan-0 text-4xl font-bold'>Minuman</h1>
              <a href="/MenuMinuman" className='border-2 p-2 rounded-full w-40 text-center font-poppins font-bold text-xl mb-7 mt-2 bg-menuAndalan-0 text-white hover:bg-BtnHoverMenu-0 hover:text-gray-500 transition-all'>Lihat</a>
            </div>
          </div>
        </div>

     </AuthLayout>
  )
}

export default MenuUtama