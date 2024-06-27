import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
const AuthLayout = (props) => {
    const {children} = props;
    return(
        <div>
            <Navbar/>
            <div className='flex justify-center flex-col mx-auto'>
            {children}
            </div>
            <Footer/>
        </div>
       
    )
}

export default AuthLayout;