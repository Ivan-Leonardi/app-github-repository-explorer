import { Routes, Route, BrowserRouter as RouterProvider} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const RouterPage: React.FC = () => (
    <RouterProvider>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/repositories/*" element={<Repository />} />
        </Routes>
    </RouterProvider>
);

export default RouterPage;
