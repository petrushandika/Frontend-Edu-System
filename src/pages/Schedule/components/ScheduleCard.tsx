import { IoIosArrowForward } from "react-icons/io";

function ScheduleCard({ title, description, imageUrl, code, instructor, time, day }: any) {
    return (
        <div className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border rounded-md p-5 gap-5">
            <div className="w-full md:w-1/3 lg:w-1/4 flex items-center">
                <img
                    src={imageUrl}
                    alt={title}
                    className="rounded w-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-3 w-full md:w-2/3 lg:w-3/4">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {title}
                </h1>
                <p className="text-xs md:text-sm lg:text-base">
                    {description}
                </p>
                <div className="flex gap-4 flex-wrap">
                    <p className="text-xs md:text-sm bg-orange-400 text-white rounded-full w-fit text-center py-1 px-3">
                        {code}
                    </p>
                    <p className="text-xs md:text-sm bg-orange-400 text-white rounded-full w-fit text-center py-1 px-3">
                        {instructor}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xs md:text-sm lg:text-base font-medium">
                        <span className="text-gray-500">{day}, </span>
                        {time}
                    </p>
                    <button>
                        <IoIosArrowForward className="text-white bg-orange-400 rounded-full p-1 text-lg md:text-xl lg:text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScheduleCard;
