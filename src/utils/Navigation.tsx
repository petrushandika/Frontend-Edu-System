import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/styles.css';

function Navigation({ onLinkClick }: any) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col w-full h-full mx-2 p-4 bg-white border-r">
            <div className="flex-col space-y-2 mt-12 md:mt-0 lg:mt-0">
                <Link
                    to="/"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Dashboard
                </Link>

                <Link
                    to="/schedule"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Jadwal
                </Link>

                <button
                    className="w-full text-left block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={() => {
                        toggleDropdown();
                        onLinkClick();
                    }}
                >
                    Mata Kuliah
                </button>

                {isDropdownOpen && (
                    <div className="my-0 flex flex-col space-y-2 max-h-48 overflow-hidden overflow-y-auto">
                        <Link
                            to="/subjects/interaksi-manusia-dan-komputer"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Interaksi Manusia & Komputer
                        </Link>
                        <Link
                            to="/subjects/jejaring-sosial-dan-konten-kreatif"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Jejaring Sosial & Konten Kreatif
                        </Link>
                        <Link
                            to="/subjects/sistem-keamanan-teknologi-informasi"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Sistem Keamanan Tek. Informasi
                        </Link>
                        <Link
                            to="/subjects/konsep-data-mining"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Konsep Data Mining
                        </Link>
                        <Link
                            to="/subjects/pemrograman-berbasis-web"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Pemrograman Berbasis Web
                        </Link>
                        <Link
                            to="/subjects/statistika"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Statistika
                        </Link>
                        <Link
                            to="/subjects/bahasa-indonesia-2"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Bahasa Indonesia 2
                        </Link>
                        <Link
                            to="/subjects/metode-penelitian"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Metode Penelitian
                        </Link>
                        <Link
                            to="/subjects/graf-dan-analisis-algoritma"
                            className="block p-2 text-xs font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                            onClick={onLinkClick}
                        >
                            • Graf & Analisis Algoritma
                        </Link>
                    </div>
                )}

                <Link
                    to="/lecturers"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Dosen
                </Link>

                <Link
                    to="/students"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Mahasiswa
                </Link>

                <Link
                    to="/assignments"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Tugas
                </Link>

                <Link
                    to="/announcements"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Pengumuman
                </Link>

                <Link
                    to="/profile"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Profil
                </Link>

                <Link
                    to="/logout"
                    className="block p-2 text-sm font-normal text-gray-700 hover:bg-gray-200 rounded-md"
                    onClick={onLinkClick}
                >
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
