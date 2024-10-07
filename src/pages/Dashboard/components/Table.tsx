import {
    Table as UITable,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function Table() {
    return (
        <div>
            <UITable>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>NPM</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Informasi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Petrus Handika</TableCell>
                        <TableCell>11122114</TableCell>
                        <TableCell>Aktif</TableCell>
                        <TableCell>Mahasiswa Aktif</TableCell>
                    </TableRow>
                </TableBody>
            </UITable>
        </div>
    )
}

export default Table;
