export default function ServicesInfoCard({ imgUrl, title, description }) {
    return (
        <div className="bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row">
            <div className="flex-1">
                <img src={imgUrl} alt={title} className="w-full h-80 md:h-full"/>
            </div>

            <div className="flex-1">
                <div className="p-10">
                    <h6 className="text-md md:text-xl text-darkBlue font-medium mb-3">{title}</h6>
                    <p className="text-sm md:text-sm leadin-6 text-darkBlue whitespace-pre-line">{description}</p>
                </div>
            </div>


        </div>
    )
}