import { Link } from "react-router-dom";

function Navigation({ onLinkClick }: any) {
    return (
        <div className="flex flex-col w-full h-full mx-2 p-4 bg-white border-r">
            <div className="flex-col space-y-2 mt-12 md:mt-0 lg:mt-0">
                <Link
                    to="/"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Dashboard
                </Link>

                <Link
                    to="/schedule"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Jadwal
                </Link>

                <Link
                    to="/subjects"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Mata Kuliah
                </Link>

                <Link
                    to="/lecturers"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Dosen
                </Link>

                <Link
                    to="/students"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Mahasiswa
                </Link>

                <Link
                    to="/assignments"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Tugas
                </Link>

                <Link
                    to="/announcements"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Pengumuman
                </Link>

                <Link
                    to="/profile"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Profil
                </Link>

                <Link
                    to="/logout"
                    className="block p-2 text-base font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
