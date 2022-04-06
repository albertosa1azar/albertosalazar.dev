import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "./routes.constants";
import { useEffect } from "react";
import { Screen } from "../ui/screens/screen/screen.screen";

export function RoutesWeb() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const validation = location.pathname !== ROUTES.EMPTY;
        if (validation) {
            navigate(ROUTES.PATTERN);
        }
    }, []);

    return (
        <Routes>
            <Route path={ROUTES.PATTERN} element={<Screen />} />
        </Routes>
    );
}
