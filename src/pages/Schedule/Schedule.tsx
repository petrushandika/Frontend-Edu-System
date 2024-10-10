import ScheduleCard from "./components/ScheduleCard"

function Schedule() {
    return (
        <div className="space-y-4">
            <ScheduleCard
                title="Interaksi Manusia & Komputer"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint commodi tempore nemo deserunt voluptate."
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7SoPFR_XaxT96AsVcQtRN_1a0_JlqIt2sg&s"
                code="D631"
                instructor="Tri Agus Triyadi"
                time="18.30 - 21.30 WIB"
                day="Senin"
            />
            <ScheduleCard
                title="Pemrograman Web"
                description="Belajar dasar-dasar pengembangan web dengan HTML, CSS, dan JavaScript."
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK2V1yqny0gJd5FwvEoErz28dfrsd6NyVmNOzsG9iOP0NEx8RXFW11as9xg1y_u5VRzs&usqp=CAU"
                code="D123"
                instructor="Budi Santoso"
                time="13.00 - 15.00 WIB"
                day="Selasa"
            />
        </div>
    )
}

export default Schedule