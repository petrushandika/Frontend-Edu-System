import AnnouncementCard from "./components/AnnouncementCard"

function Announcement() {
    return (
        <div className="flex flex-col gap-3">
            <AnnouncementCard
                title="Pengumuman Mata Kuliah Sistem Informasi"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum nemo fugiat nisi quos distinctio quibusdam quasi, cum minima atque ut quaerat aspernatur nam maxime perferendis optio labore harum nostrum?"
                postedBy="Admin"
                date="10 Oktober 2024"
            />

            <AnnouncementCard
                title="Pengumuman Ujian Akhir"
                content="Harap diperhatikan bahwa ujian akhir semester akan dilaksanakan pada tanggal 20 Desember 2024. Segera persiapkan diri."
                postedBy="Dosen"
                date="1 Desember 2024"
            />
        </div>
    )
}

export default Announcement