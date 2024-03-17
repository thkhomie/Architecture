import Logo from '../assets/Logo.png'

export default function MobileNavBar({isMenuOpen, setIsMenuOpen}){

    const handleSelect = (sectionId) =>{
        if(isMenuOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({behavior:'smooth'})
    }
    return(
        <div className="w-screen fixed top-0 z-20">
            <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
                <img className="w-16 object-contain mb-8 rounded-t-full" src={Logo} alt="company-logo" />

                <ul>
                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('home')}>Home</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('services')}>Services</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('our-work')}>Our Work</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('testimonals')}>Testimonals</a>
                    </li>
                </ul>

                <button className="h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">Contact Us</button>

                <div 
                className="w-screen h-screen bg-overlayBg fixed top-0 -z-10" 
                onClick={() => {setIsMenuOpen(false)}} />
            </div>
        </div>
    )
}