import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Keranjang from '@/Pages/Keranjang.jsx';
const AuthLayout = (props) => {
    const {children} = props;
    return(
        <div>
            <Navbar/>
            <div className='flex justify-center flex-col mx-auto'>
            {children}
            </div>
            <Keranjang/>
            <Footer/>
        </div>
       
    )
}

export default AuthLayout;