import house1 from "../assets/house1.png"
import house2 from "../assets/house2.png"
import house3 from "../assets/house3.png"


export default function Home() {
    return(
        <section id="home" className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row">
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Building Dreams, Crafting Homes</h2>

                <p className="text-sm leading-6  text-darkBlue mb-6 md:w-4/5">
                    Turning dreams into homes. Explore our exceptional craftmanship and envision your perfect space.
                </p>

                <button className="primary-btn">Explore Our Projects</button>
            </div>

            <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
                <img src={house1} alt="img one" className="mt-[7.2%] home-img" />
                <img src={house2} alt="img-two" className="mt-[4.7%] home-img" />
                <img src={house3} alt="img-three" className="mt-[7.2%] home-img" />
            </div>
        </section>
    )
}