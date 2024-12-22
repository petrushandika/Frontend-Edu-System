import { useState, useEffect } from 'react';
import IStudentData from '@/types/IStudentData';

function StudentTable() {
    const [lecturers, setLecturers] = useState<IStudentData[]>([]);
    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedCourses, setExpandedCourses] = useState<Set<number>>(new Set());

    useEffect(() => {
        async function fetchLecturers() {
            try {
                const response = await fetch('/src/data/students.json');
                const data = await response.json();
                const formattedData: IStudentData[] = data.map((item: any) => ({
                    name: item['Nama Lengkap'],
                    npm: item.NPM,
                    class: item.Kelas,
                    course: item['Mata Kuliah'].split(',').map((course: string) => course.trim()),
                }));
                setLecturers(formattedData);
            } catch (error) {
                console.error('Failed to fetch student data:', error);
            }
        }
        fetchLecturers();
    }, []);

    const filteredData = lecturers.filter((item) =>
        (typeof item.name === 'string' && item.name.toLowerCase().includes(search.toLowerCase())) ||
        (typeof item.npm === 'string' && item.npm.toLowerCase().includes(search.toLowerCase())) ||
        (typeof item.class === 'string' && item.class.toLowerCase().includes(search.toLowerCase())) ||
        item.course.some(course => course.toLowerCase().includes(search.toLowerCase()))
    );

    const paginatedData = pageSize === -1
        ? filteredData
        : filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => {
        if (filteredData.length < (currentPage - 1) * pageSize) {
            setCurrentPage(1);
        }
    }, [filteredData, pageSize]);

    const getColorForCourse = (course: string): string => {
        const courseColors: { [key: string]: string } = {
            'Interaksi Manusia & Komputer': 'bg-blue-500',
            'Jejaring Sosial & Konten Kreatif': 'bg-pink-500',
            'Sistem Keamanan Tek. Informasi': 'bg-green-500',
            'Konsep Data Mining': 'bg-yellow-500',
            'Pemrograman Berbasis Web': 'bg-purple-500',
            'Statistika': 'bg-orange-500',
            'Bahasa Indonesia 2': 'bg-red-500',
            'Metode Penelitian': 'bg-teal-500',
            'Graf & Analisis Algoritma': 'bg-indigo-500',
        };

        return courseColors[course] || 'bg-gray-500';
    };

    const toggleExpanded = (index: number) => {
        const newExpandedCourses = new Set(expandedCourses);
        if (newExpandedCourses.has(index)) {
            newExpandedCourses.delete(index);
        } else {
            newExpandedCourses.add(index);
        }
        setExpandedCourses(newExpandedCourses);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full shadow-sm outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-auto max-h-[500px] lg:border border-gray-300 rounded-lg shadow-sm">
                <table className="table-auto w-full border-collapse hidden lg:table">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nama Lengkap</th>
                            <th className="border px-4 py-2">NPM</th>
                            <th className="border px-4 py-2">Kelas</th>
                            <th className="border px-4 py-2">Mata Kuliah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.npm}</td>
                                <td className="border px-4 py-2">{item.class}</td>
                                <td className="border px-4 py-2">
                                    {item.course.map((course, idx) => (
                                        <span
                                            key={idx}
                                            className={`inline-block px-3 py-1 m-1 text-sm font-semibold text-white rounded-full ${getColorForCourse(course)}`}
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="lg:hidden">
                    {paginatedData.map((item, index) => (
                        <div key={index} className="border p-4 mb-2 rounded-md bg-white">
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p><span className="font-semibold">NPM:</span> {item.npm}</p>
                            <p><span className="font-semibold">Kelas:</span> {item.class}</p>
                            <div>
                                {item.course.slice(0, 2).map((course, idx) => (
                                    <span
                                        key={idx}
                                        className={`inline-block px-2 py-1 m-1 text-sm font-semibold text-white rounded-full ${getColorForCourse(course)}`}
                                    >
                                        {course}
                                    </span>
                                ))}
                                {item.course.length > 3 && (
                                    <>
                                        {expandedCourses.has(index) ? (
                                            <>
                                                {item.course.slice(3).map((course, idx) => (
                                                    <span
                                                        key={idx + 3}
                                                        className={`inline-block px-3 py-1 m-1 text-sm font-semibold text-white rounded-full ${getColorForCourse(course)}`}
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                                <button
                                                    onClick={() => toggleExpanded(index)}
                                                    className="text-blue-500 text-sm"
                                                >
                                                    See Less
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => toggleExpanded(index)}
                                                className="text-blue-500 text-sm"
                                            >
                                                See Details
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center my-4">
                <div>
                    <label>Page Size: </label>
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value === "All" ? -1 : parseInt(e.target.value))}
                        className="border border-gray-300 rounded-lg p-2"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value="All">All</option>
                    </select>
                </div>

                <div>
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 rounded-l bg-gray-200"
                    >
                        Prev
                    </button>
                    <span className="px-4">{currentPage}</span>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={pageSize === -1 || currentPage * pageSize >= filteredData.length}
                        className="p-2 border border-gray-300 rounded-r bg-gray-200"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentTable;
