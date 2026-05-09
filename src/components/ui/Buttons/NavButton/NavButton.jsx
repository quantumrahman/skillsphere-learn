const NavButton = ({ 
    children, 
    onClick 
}) => {

    return (
        <button 
            type="button"
            role="button"
            aria-label="button"
            onClick={onClick}
            className="px-3.5 py-1.5 bg-white border border-white text-sm font-medium text-[#000000] rounded-md cursor-pointer"
        >
            {children}
        </button>
    );
};

export default NavButton;
