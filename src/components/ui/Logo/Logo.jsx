import Image from "next/image";

const Logo = () => {

    return (
        <div className="w-9 h-9 relative rounded-md bg-white">
            <Image 
                src={"/images/logo.png"}
                alt="logo"
                fill={true}
                className="object-cover w-full h-full"
            />
        </div>
    );
};

export default Logo;
