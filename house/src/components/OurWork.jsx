import Gallery1 from '../assets/Gallery1.png'
import Gallery2 from '../assets/Gallery2.png'
import Gallery3 from '../assets/Gallery3.png'
import Gallery4 from '../assets/Gallery4.png'
import Gallery5 from '../assets/Gallery5.png'
import Gallery6 from '../assets/Gallery6.png'
import Gallery7 from '../assets/Gallery7.png'

export default function OurWork() {
    return (
        <section id='our-work' className='max-w-[1200px pt-8 mx-auto'>
            <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">Our Work</h5>
            <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
                <div className="md:col-span-2">
                    <img src={Gallery1} alt="" className='gallery-img'/>
                </div>

                <div>
                    <img src={Gallery2} alt="" className='gallery-img'/>
                </div>

                <div>
                    <img src={Gallery3} alt="" className='gallery-img'/>
                </div>

                <div>
                    <img src={Gallery4} alt="" className='gallery-img'/>
                </div>

                <div>
                    <img src={Gallery5} alt="" className='gallery-img'/>
                </div>

                <div>
                    <img src={Gallery6} alt="" className='gallery-img'/>
                </div>

                <div>
                    <img src={Gallery7} alt="" className='gallery-img'/>
                </div>
            </div>
        </section>

    )
}