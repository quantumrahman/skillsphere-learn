import { 
    RiSearchLine, 
    RiStarFill,
    RiArrowRightUpLongLine
} from "@remixicon/react";
import CourseCard from "@/components/ui/Cards/CourseCard/CourseCard";

const CoursesPage = () => {

    return (
        <div className="w-full min-h-[calc(100vh-405px)] pt-[65px] px-5">
            <div className="w-full max-w-[1300px] mx-auto mt-[120px]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[32px] font-semibold text-white leading-10">Find the Right Course for You</h1>
                        <p className="text-base font-normal text-[#8e8e8e]">Browse curated courses from industry experts and start building skills that matter in real-world projects.</p>
                    </div>
                    <div className="w-full relative">
                        <input 
                            id="search" 
                            type="text" 
                            placeholder="Search courses..." 
                            name="search" 
                            aria-label="input" 
                            autoComplete="off" role="search"
                            className="w-full py-3.5 pl-12 bg-[#0a0a0a] rounded-md border border-[#ffffff17] text-sm font-normal text-white placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#ffffff24]"
                        />
                        <div className="absolute top-1/2 left-4 -translate-y-1/2">
                            <RiSearchLine size={20} color="#8e8e8e" />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 mt-7">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
