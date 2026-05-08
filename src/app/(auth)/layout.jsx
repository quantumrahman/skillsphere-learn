import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geist = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geist_mono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata = {
    title: "SkillSphere - Online Learning Platform.",
    description: "SkillSphere online learing platform."
};

export default function AuthLayout({ children }) {
    return (
        <main className={`${geist.variable} ${geist_mono.variable} w-screen min-h-screen antialiased`}>
            {children}
        </main>
    );
};
