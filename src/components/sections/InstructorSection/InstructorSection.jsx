import { 
    getInstructors 
} from "@/utils/get.instructors";
import InstructorCard from "@/components/ui/Cards/InstructorCard/InstructorCard";

const InstructorSection = async () => {
    const instructors = await getInstructors();

    return (
        <div className="w-full py-8 md:py-[80px]">
            <div className="w-fit mx-auto text-center space-y-2">
                <h1 className="text-[32px] font-semibold text-white leading-10">Expert Mentors, Real Skills</h1>
                <p className="text-base font-normal text-[#8e8e8e]">Learn directly from industry experts and build skills that matter in today’s world.</p>
            </div>
            <div className="w-full mt-13 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
                {instructors.map((inst, idx) => (
                    <InstructorCard key={idx} instructor={inst}/>
                ))}
            </div>
        </div>
    );
};

export default InstructorSection;