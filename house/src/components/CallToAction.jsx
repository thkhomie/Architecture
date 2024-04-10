import Ghar from '../assets/Ghar.png'

export default function CallToAction() {
    return (
        <div className="bg-secondary">
        <div className="max-w-[1200px] mx-auto flex flex-col items-start md:flex-row">
            <img src={Ghar} alt="Ghar" className="w-full md:w-1/2 md:h-auto object-cover" />

            <div className="p-10">
                <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">Find Out What It Costs</h5>
                <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
                    Discovering the cost of our services is just a click away. At our website, you can easily find out what it costs to avail yourself of our offerings. We believe in transparency and clarity, which is why we provide straightforward pricing information to our valued customers. Whether you're seeking information on our products, services, or packages, simply navigate to our pricing page to get all the details you need. No hidden fees, no surprises - just a clear breakdown of what you can expect. Take the guesswork out of budgeting and explore our pricing today!
                </p>

                <button className="primary-btn">GET ESTIMATION</button>
            </div>
        </div>
    </div>

    )
}