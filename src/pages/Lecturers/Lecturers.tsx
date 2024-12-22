import LecturerCard from "./components/LecturerCard"

function Lecturers() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <LecturerCard />
            <LecturerCard />
            <LecturerCard />
        </div>
    )
}

export default Lecturers