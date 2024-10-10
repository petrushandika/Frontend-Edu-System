import { FaCloudUploadAlt } from "react-icons/fa";
import AssignmentCard from "./AssignmentCard";

function Upload() {
    return (
        <div className="w-full flex items-center justify-center">
            <AssignmentCard
                icon={FaCloudUploadAlt}
                text="Upload Tugas"
            />
        </div>
    );
}

export default Upload;
