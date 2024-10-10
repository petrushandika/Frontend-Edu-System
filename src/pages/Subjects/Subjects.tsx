import SubjectCard from "./components/SubjectCard";

function Subjects() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
            <SubjectCard />
        </div>
    );
}

export default Subjects;
