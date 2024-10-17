import { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function SubjectCard() {
    const [isHover, setIsHover] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

    const truncateText = (text: string, maxWords: number): string => {
        const words = text.split(" ");
        return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text;
    };

    const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim necessitatibus natus aliquid quos a sapiente velit tempore odit vitae commodi, eos nulla porro id culpa quia nisi recusandae sed debitis.`;

    const maxWords = 10;
    const isLongDescription = description.split(" ").length > maxWords;

    const handleShareClick = () => {
        setShowIcons(!showIcons);
    };

    return (
        <div className="bg-white border rounded-lg shadow-sm hover:shadow-md max-w-md mx-auto">
            <div className="p-4">
                <div
                    className="relative group overflow-hidden rounded-lg"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <button
                        className="absolute top-2 left-2 text-sm text-white bg-black bg-opacity-50 px-2 py-1 rounded-md hover:bg-opacity-75 z-10"
                        onClick={handleShareClick}
                    >
                        {isHover || showIcons ? (
                            <div className="flex gap-2">
                                <FaWhatsapp className="text-green-500 text-xl" />
                                <MdOutlineEmail className="text-red-500 text-xl" />
                            </div>
                        ) : (
                            "+ SHARE"
                        )}
                    </button>
                    <img
                        src="https://wallpapers.com/images/hd/aesthetic-computer-pictures-863p9twidbn825fp.jpg"
                        alt="Thumbnail"
                        className="rounded-lg object-cover w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    />
                </div>
                <div className="py-4 flex flex-col gap-3">
                    <h1 className="font-medium text-lg">Interaksi Manusia & Komputer</h1>
                    <p className="text-gray-600 text-sm">
                        {truncateText(description, maxWords)}
                    </p>
                    {isLongDescription && (
                        <a href="#" className="text-blue-500 text-xs font-medium">Read More</a>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center py-2 border-t bg-gray-100 rounded-b px-4">
                <div className="flex items-center gap-2">
                    <p className="text-xs border p-1 rounded border-blue-300 text-blue-400 bg-blue-100">Mata Kuliah</p>
                    <div className="flex items-center text-gray-600 text-xs gap-1">
                        <IoMdTime className="size-4" />
                        <p className="text-xs">Jul 25</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <AiFillLike className="size-4" />
                    <p className="text-xs">24</p>
                </div>
            </div>
        </div>
    );
}

export default SubjectCard;
