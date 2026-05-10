import { 
    RiStarFill 
} from "@remixicon/react";
import Image from "next/image";

const InstructorCard = () => {
    
    return (
        <div className="w-full h-[350px] relative rounded-xl overflow-hidden border border-[#242424]">
            <Image 
                src={"/images/instructor.jpg"}
                alt="instructor image"
                fill={true}
                className="object-cover w-full h-full grayscale"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="w-full absolute right-0 bottom-0 p-4 flex items-center justify-between md:p-6">
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-white leading-tight">Jane Smith</h3>
                        <p className="text-base font-normal text-[#8e8e8e] leading-tight">Digital Marketing</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <RiStarFill size={16} color="#8e8e8e" />
                        <span className="text-base font-normal text-[#8e8e8e] mt-0.5">4.5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
