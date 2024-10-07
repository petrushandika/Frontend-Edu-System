import Navigation from "@/utils/Navigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

function Layout() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleLinkClick = () => {
        setIsNavOpen(false);
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="h-16 bg-white fixed w-full z-100 border-b border-gray-100 flex items-center justify-between py-4 px-8">
                <h1 className="text-3xl font-extrabold text-black">
                    3KA24
                    <span className="text-black text-sm font-light ml-1">System</span>
                </h1>
                <button
                    className="md:hidden p-2 text-gray-700"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    aria-label="Toggle navigation"
                >
                    {isNavOpen ? (
                        <IoCloseSharp className="h-6 w-6" />
                    ) : (
                        <IoMenu className="h-6 w-6" />
                    )}
                </button>
            </div>

            <div className="flex flex-row w-full h-full pt-16">
                <div
                    className={`fixed top-0 right-0 w-4/5 h-full bg-white z-50 transition-transform duration-500 ease-in-out transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:relative md:w-1/5 md:block border-r border-gray-100`}
                >
                    <button
                        className="md:hidden p-2 text-gray-700 absolute top-4 left-5"
                        onClick={() => setIsNavOpen(false)}
                        aria-label="Close navigation"
                    >
                        <IoCloseSharp className="h-6 w-6" />
                    </button>
                    <Navigation onLinkClick={handleLinkClick} />
                </div>

                <div className="w-full md:w-4/5 ml-auto h-full overflow-y-auto pt-4 px-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
