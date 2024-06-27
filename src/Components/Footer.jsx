import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Mail from '../assets/mail.svg'
import Whatsapp from '../assets/whatsapp.svg'

export default function Footer()  {
    return(
        <div className=' bg-neutral-300  '>
            <div className=' container flex justify-between mx-auto w-full stinky items-center bottom-0 text-black'>
            <div className='flex py-4'>
                    <img src={Instagram} alt=""  className='hover:-translate-y-4 translate-y-0 transition-all'/>
                    <img src={Facebook} alt="" className='hover:-translate-y-4 translate-y-0 transition-all'/>
                    <img src={Mail} alt="" className='hover:-translate-y-4 translate-y-0 transition-all'/>
                    <img src={Whatsapp} alt="" className='hover:-translate-y-4 translate-y-0 transition-all'/>
                </div>
                <div className=' self-center'>
                    <h2 className='font-poppins font-bold'>@Copyright KafeKita 2024</h2>
                </div>
            </div>
        </div>
    )
}