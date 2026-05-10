import { 
    RiArrowDownSLine,
    RiArrowLeftLine, 
    RiArrowRightLine, 
    RiBriefcaseLine, 
    RiStarFill,
    RiTimeLine
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const CourseDetailsPage = () => {

    return (
        <div className="w-full min-h-[calc(100vh-405px)] pt-[65px] px-5">
            <div className="w-full max-w-[1300px] mx-auto mt-[120px] pb-8 md:pb-[80px]">
                <div className="w-full flex flex-col justify-center gap-6">
                    <div className="flex items-center gap-3">
                        <Link 
                            href={'/courses'}
                            className="text-white"
                        >
                            <RiArrowLeftLine />
                        </Link>
                        <h3 className="text-lg font-semibold text-white">Back to Courses</h3>
                    </div>
                    <div className="w-full flex flex-col justify-between gap-5 md:gap-6 md:flex-row">
                        <div className="w-full min-h-[250px] relative md:min-h-[350px] lg:min-h-[400px] rounded-xl">
                            <Image 
                                src={'/images/courses/web.webp'}
                                alt="web development"
                                fill={true}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                        <div className="w-full min-h-[200px] flex flex-col gap-5">
                            <div className="w-full space-y-4">
                                <h2 className="text-[32px] font-bold text-white">Complete Web Dev Bootcamp</h2>
                                <div className="w-full flex items-center justify-between">
                                    <div className="w-auto flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full relative">
                                            <Image 
                                                src={'/images/instructors/jane.webp'}
                                                alt="web dev"
                                                fill={true}
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </div>
                                        <span className="text-base font-medium text-white">Jane Smith</span>
                                    </div>
                                    <div className="w-auto flex items-center justify-center gap-1">
                                        <RiStarFill size={16} color="#8e8e8e"/>
                                        <span className="text-base font-normal text-white mt-0.5">4.9</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-between gap-8">
                                <div className="flex items-center justify-center gap-1">
                                    <RiTimeLine size={16} color="#8e8e8e"/>
                                    <span className="text-sm font-normal text-[#8e8e8e]">20 hours</span>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <RiBriefcaseLine size={16} color="#8e8e8e"/>
                                    <span className="text-sm font-normal text-[#8e8e8e]">Beginner</span>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-[#8e8e8e] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi cum soluta at amet, porro velit obcaecati eveniet, impedit deleniti incidunt repellendus? Commodi, deleniti modi inventore corrupti natus voluptatibus totam voluptas consectetur beatae. Deserunt pariatur quis voluptatibus facilis odit. Deleniti ab, nulla quibusdam culpa perferendis dolores recusandae praesentium in officiis, itaque architecto possimus accusamus aliquam aliquid velit nesciunt quisquam alias consectetur unde.</p>
                            </div>
                            <div className="w-fit flex items-center gap-2">
                                <span className="text-white cursor-pointer hover:underline">Enroll Now</span>
                                <RiArrowRightLine size={16} color="#ffffff" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-20">
                    <h3 className="text-2xl font-bold text-white">Course Curriculum</h3>
                    <div className="w-full flex flex-col bg-[#0a0a0a] border border-[#242424] rounded-xl p-5 mt-7 gap-5">
                        <div className="w-full">
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xs font-medium text-white sm:text-base">Module 1: Introduction to Web development</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xs font-normal text-[#8e8e8e] sm:text-base">5 Lessons</span>
                                    <RiArrowDownSLine size={16} color="#8e8e8e"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#242424]"></div>
                        <div className="w-full">
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xs font-medium text-white sm:text-base">Module 2: Frontend development</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xs font-normal text-[#8e8e8e] sm:text-base">7 Lessons</span>
                                    <RiArrowDownSLine size={16} color="#8e8e8e"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#242424]"></div>
                        <div className="w-full">
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xs font-medium text-white sm:text-base">Module 3: Backend development</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xs font-normal text-[#8e8e8e] sm:text-base">7 Lessons</span>
                                    <RiArrowDownSLine size={16} color="#8e8e8e"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-[#242424]"></div>
                        <div className="w-full">
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xs font-medium text-white sm:text-base">Module 3: Database & develoyment</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xs font-normal text-[#8e8e8e] sm:text-base">3 Lessons</span>
                                    <RiArrowDownSLine size={16} color="#8e8e8e"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
