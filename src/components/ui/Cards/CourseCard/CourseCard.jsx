import { 
    RiArrowRightUpLongLine, 
    RiStarFill 
} from "@remixicon/react";

const CourseCard = () => {

    return (
        <div className="w-full p-4 border border-[#242424] rounded-xl flex flex-col gap-4 group cursor-pointer md:p-6">
            <div className="w-full h-[220px] bg-amber-400 rounded-xl relative">

            </div>
            <div className="w-full">
                <h3 className="text-xl font-semibold text-white leading-10">Complete Web Development</h3>
                <p className="text-base font-normal text-[#8e8e8e]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mt-1">
                    <div className="w-8 h-8 bg-amber-400 rounded-full relative">

                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-medium text-white leading-4">Rakibul Rahman</span>
                        <span className="text-xs font-normal text-[#8e8e8e]">Instructor</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <RiStarFill size={16} color="#8e8e8e"/>
                    <span className="text-base font-normal text-white mt-0.5">4.9</span>
                </div>
            </div>
            <button className="w-fit text-base font-normal text-[#8e8e8e] mx-auto cursor-pointer flex items-center justify-center  group-hover:text-blue-500 mt-2">
                View details
                <RiArrowRightUpLongLine size={16} className="text-[#8e8e8e] transition-transform duration-300 ease-in-out group-hover:text-blue-500" />
            </button>
        </div>
    );
};

export default CourseCard;
