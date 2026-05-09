"use client";

import { 
    RiMenu4Fill, 
    RiCloseLargeLine 
} from "@remixicon/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/ui/Logo/Logo";
import Navbar from "@/components/ui/Navbar/Navbar";
import NavButton from "@/components/ui/Buttons/NavButton/NavButton";

const Header = () => {
    const router = useRouter();

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleAuthClick = (btn) => {
        if (btn === 'login') {
            router.push('/auth/signin');
        };

        if (btn === 'logout') {
            console.log("Logout successfully!");
        };
    };

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    return (
        <div className="w-full relative">
            <div className="w-full px-5 py-3.5 bg-[#0a0a0a] border-b border-[#242424] fixed top-0 left-0">
                <div className="w-full max-w-[1400px] mx-auto">
                    <header className="w-full flex items-center justify-between">
                        <div className="w-fit flex items-center justify-center gap-10">
                            <Link 
                                href={'/'}
                            >
                                <Logo />
                            </Link>
                            <div className="hidden md:block">
                                <Navbar />
                            </div>
                        </div>
                        <div className="hidden items-center justify-center gap-4">
                            <NavButton onClick={() => handleAuthClick("logout")}>Logout</NavButton>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 rounded-full relative bg-[#000000]">
                                    <Image 
                                        src={'/images/profile.webp'}
                                        alt="profile"
                                        fill={true}
                                        className="object-cover w-full h-full rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] font-normal text-white">Welcome!</p>
                                    <span className="text-[10px] font-normal text-white">Rakibul Rahman</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <Link 
                                href={'/auth/signup'}
                                className="text-sm font-normal text-[#8e8e8e] hover:text-white"
                            >
                                Sign Up
                            </Link>
                            <NavButton onClick={() => handleAuthClick("login")}>Login</NavButton>
                            <div className="w-fit flex items-center justify-center md:hidden">
                                <button 
                                    type="button"
                                    aria-label="button"
                                    role="button"
                                    onClick={handleToggleMenu}
                                    className="cursor-pointer"
                                >
                                    <RiMenu4Fill size={24} color="#ffffff" />
                                </button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className={`w-full max-w-[375px] h-full bg-[#0a0a0a] fixed top-0 right-0 transform transition-transform duration-300 ease-linear md:hidden 
                ${toggleMenu 
                    ? "translate-x-0" 
                    : "translate-x-full"
                }
            `}
            >
                <div className="p-5 flex items-center">
                    <button
                        type="button"
                        aria-label="button"
                        role="button"
                        onClick={handleToggleMenu}
                        className="cursor-pointer flex items-center"
                    >
                        <RiCloseLargeLine size={24} color="#ffffff"/>
                    </button>
                </div>
                <div className="w-full px-5 mt-10 flex flex-col gap-[30px]">
                    <Link 
                        href={'/'}
                        className="text-base font-normal text-[#8e8e8e] hover:text-white"
                        onClick={handleToggleMenu}
                    >Home</Link>
                    <Link 
                        href={'/courses'}
                        className="text-base font-normal text-[#8e8e8e] hover:text-white"
                        onClick={handleToggleMenu}
                    >Courses</Link>
                    <Link 
                        href={'/profile'}
                        className="text-base font-normal text-[#8e8e8e] hover:text-white"
                        onClick={handleToggleMenu}
                    >Profile</Link>
                </div>
            </div>
        </div>
        
    );
};

export default Header;
