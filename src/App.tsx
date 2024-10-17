import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedule from "./pages/Schedule/Schedule";
import Subjects from "./pages/Subjects/Subjects";
import Lecturers from "./pages/Lecturers/Lecturers";
import Students from "./pages/Students/Students";
import Announcement from "./pages/Announcement/Announcement";
import Profile from "./pages/Profile/Profile";
import Assignments from "./pages/Assignments/Assignments";
import Regular from "./pages/Students/components/Regular";
import Extension from "./pages/Students/components/Extension";
import Repeating from "./pages/Students/components/Repeating";
import Transferred from "./pages/Students/components/Transferred";
import Main from "./pages/Assignments/components/Main";
import Final from "./pages/Assignments/components/Final";
import Upload from "./pages/Assignments/components/Upload";
import Layout from "./layout/Layout";
import HumanComputerInteraction from "./pages/Subjects/components/HumanComputerInteraction";
import SocialNetworkingAndCreativeContent from "./pages/Subjects/components/SocialNetworkingAndCreativeContent";
import InformationTechnologySecuritySystems from "./pages/Subjects/components/InformationTechnologySecuritySystems";
import DataMiningConcepts from "./pages/Subjects/components/DataMiningConcepts";
import WebProgramming from "./pages/Subjects/components/WebProgramming";
import Statistics from "./pages/Subjects/components/Statistics";
import IndonesianLanguage from "./pages/Subjects/components/IndonesianLanguage";
import ResearchMethods from "./pages/Subjects/components/ResearchMethods";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="schedule" element={<Schedule />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<HumanComputerInteraction />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<SocialNetworkingAndCreativeContent />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<InformationTechnologySecuritySystems />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<DataMiningConcepts />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<WebProgramming />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<Statistics />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<IndonesianLanguage />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<ResearchMethods />} />
        <Route path="subjects/interaksi-manusia-dan-komputer" element={<HumanComputerInteraction />} />
        <Route path="lecturers" element={<Lecturers />} />

        <Route path="students" element={<Students />}>
          <Route path="regular" element={<Regular />} />
          <Route path="extension" element={<Extension />} />
          <Route path="repeating" element={<Repeating />} />
          <Route path="transferred" element={<Transferred />} />
        </Route>

        <Route path="assignments" element={<Assignments />}>
          <Route path="main" element={<Main />} />
          <Route path="final" element={<Final />} />
          <Route path="upload" element={<Upload />} />
        </Route>

        <Route path="announcements" element={<Announcement />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
