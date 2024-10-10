import { TfiAnnouncement } from "react-icons/tfi";

function AnnouncementCard({ title, content, postedBy, date }: any) {
    return (
        <div className="md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border rounded-md p-5 gap-5 space-y-3">
            <div className="flex items-center gap-3">
                <TfiAnnouncement className="size-10 md:size-7 lg:size-7" />
                <h3>{title}</h3>
            </div>
            <div className="text-xs flex flex-col gap-8">
                <p>{content}</p>
                <span className="text-gray-400">Diposting oleh: {postedBy}, {date}</span>
            </div>
        </div>
    )
}

export default AnnouncementCard;
