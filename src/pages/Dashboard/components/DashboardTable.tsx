import { useEffect, useState } from "react";
import {
    Table as UITable,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import ITableData from "@/types/ITableData";

function DashboardTable({ caption }: { caption: string }) {
    const [data, setData] = useState<ITableData[]>([]);
    const [filteredData, setFilteredData] = useState<ITableData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const columns = ["Nama Lengkap", "NPM", "Status", "Informasi"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/data/students.json");
                const result = await response.json();

                const formattedData: ITableData[] = result.map((item: any) => ({
                    name: item['Nama Lengkap'],
                    npm: item.NPM,
                    status: item.Status,
                    informasi: item.Informasi,
                }));

                setData(formattedData);
                setFilteredData(formattedData);
            } catch (error) {
                console.error("Error fetching the data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(item.npm).toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.informasi.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    return (
        <div>
            <input
                type="text"
                placeholder="Cari Nama, NPM, Status, atau Informasi Mahasiswa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded-lg w-full outline-none placeholder:text-sm md:placeholder:text-sm lg:placeholder:text-sm"
            />

            <div className="max-h-[300px] overflow-y-auto relative border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <UITable className="min-w-full">
                    <TableCaption>{caption}</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-gray-200 sticky top-0 z-10">
                            {columns.map((column, index) => (
                                <TableHead
                                    key={index}
                                    className="sticky top-0 bg-gray-200 z-10"
                                >
                                    {column}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((row, index) => (
                                <TableRow key={index} className="hover:bg-gray-100">
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.npm}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.informasi}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    Tidak ada data yang cocok.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </UITable>
            </div>
        </div>
    );
}

export default DashboardTable;
