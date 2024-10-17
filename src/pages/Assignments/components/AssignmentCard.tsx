import { FaRegFolderOpen } from "react-icons/fa";

function AssignmentCard({ icon: Icon = FaRegFolderOpen, text = "Upload Tugas", className = "", ...props }) {
    return (
        <div
            className={`flex flex-col sm:flex-row md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border rounded-lg p-5 gap-5 w-full 
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl ${className}`}
            {...props}
        >
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 items-center md:items-start">
                <Icon className="text-yellow-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
                <p className="text-base sm:text-sm md:text-lg lg:text-xl font-semibold text-center sm:text-left">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default AssignmentCard;
