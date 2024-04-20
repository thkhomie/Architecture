import { useState } from 'react'
import Logo from '../assets/Logo.png'
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri'
import MobileNavBar from './MobileNavBar'
import { Link } from 'react-scroll'

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {isMenuOpen && <MobileNavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

            <div className='bg-background sticky top-0 z-10'>

                <nav className='max-w-screen-xl mx-auto py-4 px-6'>
                    <div className="flex justify-between items-center">
                        <a href="/">
                            <img src={Logo} alt="company-logo" className='rounded-full size-12' />
                        </a>


                        <ul className="list-none hidden md:flex md:gap-14">     {/*mobile md*/}
                            <li>
                                <Link to='home' smooth spy offset={-80} className="menu-item">Home</Link>
                            </li>
                            <li>
                                <Link to='services' smooth spy offset={-80} className="menu-item">Services</Link>
                            </li>
                            <li>
                                <Link to='our-work' smooth spy offset={-80} className="menu-item">Our Work</Link>
                            </li>
                            <li>
                                <Link to='testimonals' smooth spy offset={-80} className="menu-item">Testimonals</Link>
                            </li>
                        </ul>

                        <button className='hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block'>Contact Us</button>

                        <button onClick={() => { setIsMenuOpen(true) }} className='w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden'>
                            {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
                        </button>
                    </div>


                </nav>
            </div>
        </>
    )
}