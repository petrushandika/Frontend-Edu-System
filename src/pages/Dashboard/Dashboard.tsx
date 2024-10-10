import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Table from "./components/DashboardTable";

function Dashboard() {
    const columns = ["No", "Nama", "NPM", "Status", "Informasi"];
    const data = [
        [1, "Petrus Handika", "11122114", "Aktif", "Mahasiswa Aktif"],
        [2, "John Doe", "11122115", "Non-Aktif", "Mahasiswa Cuti"],
        [3, "Jane Smith", "11122116", "Aktif", "Mahasiswa Aktif"],
        [4, "Michael Johnson", "11122117", "Aktif", "Mahasiswa Aktif"],
    ];

    return (
        <div className="w-full bg-white rounded-lg my-2">
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full md:w-1/2">
                    <PieChart />
                </div>
                <div className="w-full md:w-1/2">
                    <BarChart />
                </div>
            </div>
            <div className="mt-5">
                <Table caption="Daftar Mahasiswa" columns={columns} data={data} />
            </div>
        </div>
    );
}

export default Dashboard;
