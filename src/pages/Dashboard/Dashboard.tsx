import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Table from "./components/Table";

function Dashboard() {
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
                <Table />
            </div>
        </div>
    );
}

export default Dashboard;
