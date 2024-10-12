// "use strict";

import LecturerTable from "./components/LecturerTable"

// import {
//     useCallback,
//     useMemo,
//     useState,
//     StrictMode,
// } from "react";
// import { createRoot } from "react-dom/client";
// import { AgGridReact } from "@ag-grid-community/react";
// import "@ag-grid-community/styles/ag-grid.css";
// import "@ag-grid-community/styles/ag-theme-quartz.css";
// import "../../styles/styles.css";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import {
//     ColDef,
//     GridReadyEvent,
//     ModuleRegistry,
// } from "@ag-grid-community/core";
// import { IScheduleData } from "../../types/IScheduleData";
// import { Input } from "@/components/ui/input";
// import { IoSearchOutline } from "react-icons/io5";

// ModuleRegistry.registerModules([ClientSideRowModelModule]);

// function Lecturers() {
//     const [rowData, setRowData] = useState<IScheduleData[]>([]);
//     const [columnDefs] = useState<ColDef[]>([
//         { field: "No", minWidth: 100, flex: 1 },
//         { field: "Nama", minWidth: 100, flex: 1 },
//         { field: "Mata Kuliah", minWidth: 250, flex: 1 },
//         { field: "Kontak", minWidth: 100, flex: 1 },
//     ]);

//     const defaultColDef = useMemo<ColDef>(() => ({
//         editable: true,
//         filter: true,
//         resizable: true,
//     }), []);

//     const onGridReady = useCallback((params: GridReadyEvent) => {
//         console.log(params);
//         fetch("/src/data/lecturers.json")
//             .then((resp) => resp.json())
//             .then((data: IScheduleData[]) => setRowData(data));
//     }, []);

//     return (
//         <div style={{ width: "100%", height: "auto" }} className="flex flex-col gap-3">
//             <div className="relative">
//                 <Input type="text" placeholder="Search..." className="pl-10" />
//                 <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 rounded" />
//             </div>
//             <div className="ag-theme-quartz text-xs sm:text-xs">
//                 <AgGridReact<IScheduleData>
//                     rowData={rowData}
//                     columnDefs={columnDefs}
//                     defaultColDef={defaultColDef}
//                     onGridReady={onGridReady}
//                     domLayout="autoHeight"
//                 />
//             </div>
//         </div>
//     );
// }

// const root = createRoot(document.getElementById("root")!);
// root.render(
//     <StrictMode>
//         <Lecturers />
//     </StrictMode>,
// );

// export default Lecturers;

function Lecturers() {
    return (
        <div>
            <LecturerTable />
        </div>
    )
}

export default Lecturers