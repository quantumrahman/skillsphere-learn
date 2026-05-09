import { RiCustomerService2Fill } from "@remixicon/react";

import Link from "next/link";
import Logo from "@/components/ui/Logo/Logo";

const Footer = () => {

    return (
        <div className="w-full px-5 pt-[35px] bg-[#0a0a0a] border-t border-[#242424]">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="w-full">
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                        <Logo />
                        <h1 className="text-base font-normal text-white text-center">turn your skills into success.</h1>
                    </div>
                    <div className="w-full mt-[70px] flex flex-col justify-between gap-[64px] sm:items-center sm:gap-0 sm:flex-row">
                        <div className="w-full flex flex-col gap-4">
                            <Link 
                                href={'/'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] hover:text-white"
                            >Home</Link>
                            <Link 
                                href={'/courses'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] hover:text-white"
                            >Courses</Link>
                            <Link 
                                href={'/'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] hover:text-white"
                            >Terms & Conditions</Link>
                            <Link 
                                href={'/'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] hover:text-white"
                            >Policy & Privacy</Link>
                        </div>
                        <div className="w-full space-y-4 text-center sm:w-fit">
                            <p className="text-base font-normal text-[#8e8e8e] underline cursor-default">support@skillsphere.com</p>
                            <div className="flex items-center justify-center gap-1">
                                <RiCustomerService2Fill size={18} color="#8e8e8e"/>
                                <p className="text-base font-normal text-[#8e8e8e]">16200</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 sm:items-end">
                            <Link 
                                href={'/'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] text-right hover:text-white"
                            >Twitter</Link>
                            <Link 
                                href={'/courses'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] text-right hover:text-white"
                            >Facebook</Link>
                            <Link 
                                href={'/'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] text-right hover:text-white"
                            >Linkedin</Link>
                            <Link 
                                href={'/'} 
                                className="w-fit text-sm font-normal text-[#8e8e8e] text-right hover:text-white"
                            >GitHub</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10 border-t border-[#242424] flex items-center justify-between flex-col py-4 gap-1 sm:flex-row">
                    <p className="text-sm font-normal text-[#8e8e8e]">&copy; {new Date().getFullYear()} SkillSphere.</p>
                    <p className="text-sm font-normal text-[#8e8e8e] text-center">Developed by Rakibul Rahman {`(RRDev)`}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
