import { useState, useEffect } from 'react';
import ILecturerData from '@/types/ILecturerData';

function LecturerTable() {
    const [lecturers, setLecturers] = useState<ILecturerData[]>([]);
    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function fetchLecturers() {
            try {
                const response = await fetch('/src/data/lecturers.json');
                const data = await response.json();
                const formattedData: ILecturerData[] = data.map((item: any) => ({
                    name: item.Nama,
                    course: item['Mata Kuliah'],
                    email: item.Kontak.Email,
                    whatsapp: item.Kontak.Whatsapp,
                }));
                setLecturers(formattedData);
            } catch (error) {
                console.error('Failed to fetch lecturers data:', error);
            }
        }
        fetchLecturers();
    }, []);

    const filteredData = lecturers.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.course.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.whatsapp.includes(search)
    );

    const paginatedData = pageSize === -1
        ? filteredData
        : filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => {
        if (filteredData.length < (currentPage - 1) * pageSize) {
            setCurrentPage(1);
        }
    }, [filteredData, pageSize]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded p-2 mb-4 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-auto max-h-[500px] lg:border border-gray-300 rounded">
                <table className="table-auto w-full border-collapse hidden lg:table">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nama</th>
                            <th className="border px-4 py-2">Mata Kuliah</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Whatsapp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.course}</td>
                                <td className="border px-4 py-2">{item.email}</td>
                                <td className="border px-4 py-2">{item.whatsapp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="lg:hidden">
                    {paginatedData.map((item, index) => (
                        <div key={index} className="border p-4 mb-2 rounded-md bg-white">
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p><span className="font-semibold">Mata Kuliah:</span> {item.course}</p>
                            <p><span className="font-semibold">Email:</span> {item.email}</p>
                            <p><span className="font-semibold">Whatsapp:</span> {item.whatsapp}</p>
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
                        className="border border-gray-300 rounded p-2"
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

export default LecturerTable;
