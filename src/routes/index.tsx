import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const RouterPage: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/repository" element={<Repository />} />
        </Routes>
    </Router>
);

export default RouterPage;
