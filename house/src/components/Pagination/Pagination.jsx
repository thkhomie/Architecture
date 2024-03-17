import { TESTIMONALS } from "../../utilis/data";

export default function Pagination({active}){
    return(
        <div className="flex justify-center items-center gap-3">
            {TESTIMONALS.map((item, index) => (
                <div key={item.id} className={`w-8 h-1 ${
                    active === index ? "bg-darkBlue" : "bg-blue-100"
                } rounded-md transition-all duration-500`} />
            ))}
        </div>
    )
}