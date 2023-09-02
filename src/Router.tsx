import { Route, Routes } from "react-router-dom";
import { DeafaultLayout } from "./Layout/DefaultLayout";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout />} >
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}