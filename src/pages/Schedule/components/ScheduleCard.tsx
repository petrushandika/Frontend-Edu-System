import { IoIosArrowForward } from "react-icons/io";
import IScheduleCard from "@/types/IScheduleCard";

function ScheduleCard({ course, description, imageUrl, class: classProp, instructor, time, day }: IScheduleCard) {
    return (
        <div className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border rounded-lg p-5 gap-5">
            <div className="w-full md:w-1/3 lg:w-1/4 flex items-center">
                <img
                    src={imageUrl}
                    alt={course}
                    className="rounded object-cover w-full h-52 md:h-40 lg:h-48"
                />
            </div>
            <div className="flex flex-col gap-3 w-full md:w-2/3 lg:w-3/4 justify-center">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {course}
                </h1>
                <p className="text-xs md:text-sm lg:text-base">
                    {description}
                </p>
                <div className="flex gap-3 flex-wrap">
                    <p className="text-sm border p-1 rounded-full border-blue-300 text-blue-400 bg-blue-100">{classProp}</p>
                    <p className="text-sm border p-1 rounded-full border-blue-300 text-blue-400 bg-blue-100">{instructor}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xs md:text-sm lg:text-base font-medium">
                        <span className="text-gray-500">{day}, </span>
                        {time}
                    </p>
                    <button>
                        <IoIosArrowForward className="border-blue-300 text-blue-400 bg-blue-100 rounded-full p-1 text-lg md:text-xl lg:text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScheduleCard;
