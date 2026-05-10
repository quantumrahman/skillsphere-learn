"use client";

import { 
    RiArrowRightUpLongLine, 
    RiStarFill 
} from "@remixicon/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CourseCard = ({ course }) => {
    const router = useRouter();

    const handleViewDetails = (params) => {
        const urlFormat = params.split(" ").join("-").toLowerCase();
        
        router.push(`/courses/course-details/${urlFormat}`);
    };
    
    return (
        <div className="w-full p-4 border border-[#242424] rounded-xl flex flex-col gap-4 group cursor-pointer md:p-6">
            <div className="w-full h-[220px] rounded-xl relative">
                <Image 
                    src={course.image}
                    alt={course.title}
                    fill={true}
                    className="object-cover w-full h-full rounded-xl"
                />
            </div>
            <div className="w-full">
                <h3 className="text-xl font-semibold text-white leading-10">{course.title}</h3>
                <p className="text-base font-normal text-[#8e8e8e]">{course.description}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mt-1">
                    <div className="w-8 h-8 rounded-full relative">
                        <Image 
                            src={course.instructorImage}
                            alt={course.instructor}
                            fill={true}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-medium text-white leading-4">{course.instructor}</span>
                        <span className="text-xs font-normal text-[#8e8e8e]">Instructor</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <RiStarFill size={16} color="#8e8e8e"/>
                    <span className="text-base font-normal text-white mt-0.5">{course.rating}</span>
                </div>
            </div>
            <button 
                onClick={() => handleViewDetails(course.title)}
                className="w-fit text-base font-normal text-[#8e8e8e] mx-auto cursor-pointer flex items-center justify-center  group-hover:text-blue-500 mt-2">
                View details
                <RiArrowRightUpLongLine size={16} className="text-[#8e8e8e] transition-transform duration-300 ease-in-out group-hover:text-blue-500" />
            </button>
        </div>
    );
};

export default CourseCard;
