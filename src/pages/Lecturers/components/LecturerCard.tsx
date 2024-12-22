import { FaLinkedin } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

function LecturerCard() {
    return (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border rounded-lg p-5 gap-5 w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <div className="flex gap-x-3">
                <div>
                    <img
                        className="w-14 object-contain rounded-full"
                        src="https://media.licdn.com/dms/image/C5603AQFB4ebeyLpzgw/profile-displayphoto-shrink_200_200/0/1568784020887?e=2147483647&v=beta&t=nwdY52ZE4xQEALFZCiEKULxWp6EeJ2sPtlDgZCBfpRg"
                        alt="Petrus Handika"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-sm">Petrus Handika</h3>
                    <p className="text-sm text-gray-400">petrushandikasinaga@gmail.com</p>
                </div>
            </div>
            <hr className="my-3" />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                    <FaLinkedin />
                    <p className="text-sm text-gray-400">LinkedIn</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <p className="text-sm">More</p>
                    <CiCircleMore />
                </div>
            </div>
        </div>
    );
}

export default LecturerCard;
