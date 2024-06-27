import AuthLayout from "../Layouts/AuthLayout"
import Search from "../assets/search.svg"
import cartmenu from "../assets/cartmenu.svg"
import MenuCard from "../Components/MenuCard"



function MenuMakanan (){
           
    return(
        <AuthLayout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-poppins text-5xl m-4 text-textandalan-0 font-bold">Makanan</h1>
                <div className=" flex w-64 items-center h-auto mx-auto justify-center gap-2">
                    <input type="text" className="  border border-slate-600 rounded-xl focus:decoration-transparent h-6 text-black " placeholder="Search" />
                    <img src={Search} alt="" />
                </div>
                <label className='flex flex-col items-center justify-center' >
                    <h1 className='font-poppins text-textandalan-0 text-4xl italic font-bold mt-10 '>Menu <span className='text-black'>Kami</span></h1>
                    <p className='font-poppins font-extralight text-black italic text-center'>silahkan order dari menu yang kami sediakan ya sahabat senja</p>
                </label>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 rounded-2xl w-40 bg-btnDropdown-0 btn-outline text-white">Select Menu </div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-btnDropdown-0">
                        <li className="btn-outline rounded-full text-white"><a href="/MenuMakanan">Makanan</a></li>
                        <li className="btn-outline rounded-full text-white"><a href="/MenuMinuman">Minuman</a></li>
                    </ul>
                </div>  
                <div className="flex w-full items-center justify-center gap-30 mb-10">
                    <MenuCard url2={cartmenu}/>
                </div>
            </div>
        </AuthLayout>
    )
}

export default MenuMakanan