import { Route, Routes, useParams } from "react-router-dom";
import { DeafaultLayout } from "./Layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="details/:number" element={<Details />} />
            </Route>
        </Routes>
    )
}