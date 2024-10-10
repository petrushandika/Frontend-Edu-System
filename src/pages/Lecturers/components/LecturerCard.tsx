import { useState, useEffect } from "react";
import ILecturerData from "../../../types/ILecturerData";

function LecturerCard() {
    const [lecturers, setLecturers] = useState<ILecturerData[]>([]);

    useEffect(() => {
        fetch("/src/data/lecturers.json")
            .then((response) => response.json())
            .then((data: ILecturerData[]) => setLecturers(data))
            .catch((error) => console.error("Error fetching lecturers:", error));
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-100 rounded-lg overflow-hidden mx-auto">
                <thead className="bg-gray-100 border-b border-gray-100">
                    <tr>
                        <th className="border-r border-gray-100 p-3 text-center">No</th>
                        <th className="border-r border-gray-100 p-3 text-center">Nama</th>
                        <th className="border-r border-gray-100 p-3 text-center">Mata Kuliah</th>
                        <th className="p-3 text-center">Kontak</th>
                    </tr>
                </thead>

                <tbody>
                    {lecturers.map((lecturer) => (
                        <tr key={lecturer.No} className="border-b border-gray-100">
                            <td className="border-r border-gray-100 p-3 text-center">{lecturer.No}</td>
                            <td className="border-r border-gray-100 p-3 text-center">{lecturer.Nama}</td>
                            <td className="border-r border-gray-100 p-3 text-center">{lecturer['Mata Kuliah']}</td>
                            <td className="p-3 text-center">
                                <p>WhatsApp: {lecturer.Kontak.Whatsapp}</p>
                                <p>Email: {lecturer.Kontak.Email}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LecturerCard;
