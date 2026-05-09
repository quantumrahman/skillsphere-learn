"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-center gap-4">
            <Link 
                href={"/"}
                className={`text-sm font-normal 
                    ${pathname === '/'
                        ? "text-white"
                        : "text-[#8e8e8e] hover:text-white"
                    }
                `}
            >
                Home
            </Link>
            <div className="w-[2px] h-3.5 bg-white rotate-[30deg]"></div>
            <Link 
                href={"/courses"}
                className={`text-sm font-normal 
                    ${pathname === '/courses'
                        ? "text-white"
                        : "text-[#8e8e8e] hover:text-white"
                    }
                `}
            >
                Courses
            </Link>
            <div className="w-[2px] h-3.5 bg-white rotate-[30deg]"></div>
            <Link 
                href={"/profile"}
                className={`text-sm font-normal 
                    ${pathname === '/profile'
                        ? "text-white"
                        : "text-[#8e8e8e] hover:text-white"
                    }
                `}
            >
                Profile
            </Link>
        </div>
    );
};

export default Navbar;
