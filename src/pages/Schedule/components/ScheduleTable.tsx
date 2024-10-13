"use strict";

import {
    useCallback,
    useMemo,
    useState,
    StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "../../styles/styles.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
    ColDef,
    GridReadyEvent,
    ModuleRegistry,
} from "@ag-grid-community/core";
import IScheduleData from "@/types/IScheduleData";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function ScheduleTable() {
    const [rowData, setRowData] = useState<IScheduleData[]>([]);
    const [columnDefs] = useState<ColDef[]>([
        { field: "Hari", minWidth: 100, flex: 1 },
        { field: "Mata Kuliah", minWidth: 250, flex: 1 },
        { field: "Waktu", minWidth: 100, flex: 1 },
        { field: "Ruang", minWidth: 100, flex: 1 },
        { field: "Dosen", minWidth: 250, flex: 1 },
    ]);

    const defaultColDef = useMemo<ColDef>(() => ({
        editable: true,
        filter: true,
        resizable: true,
    }), []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        console.log(params);
        fetch("/src/data/ScheduleTable.json")
            .then((resp) => resp.json())
            .then((data: IScheduleData[]) => setRowData(data));
    }, []);

    return (
        <div style={{ width: "100%", height: "auto" }}>
            <div className="ag-theme-quartz text-xs sm:text-xs">
                <AgGridReact<IScheduleData>
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    domLayout="autoHeight"
                />
            </div>
        </div>
    );
}

const root = createRoot(document.getElementById("root")!);
root.render(
    <StrictMode>
        <ScheduleTable />
    </StrictMode>,
);

export default ScheduleTable;
