import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

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
    description: "SkillSphere online learning platform."
};

export default function MainLayout({ children }) {
    return (
        <main className={`${geist.variable} ${geist_mono.variable} w-full min-h-screen antialiased`}>
            <Header />
            {children}
            <Footer />
        </main>
    );
};
