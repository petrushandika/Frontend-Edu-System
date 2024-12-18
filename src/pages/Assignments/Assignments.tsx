import Final from "./components/Final";
import Main from "./components/Main";
import Upload from "./components/Upload";

function Assignments() {
    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Main />
            <Final />
            <Upload />
        </div>
    );
}

export default Assignments;
