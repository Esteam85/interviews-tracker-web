import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {HomePage} from "./pages/home.tsx";
import {PageLoader} from "./components/page-loader.tsx";
import {AuthenticationGuard} from "./components/authentication-guard.tsx";

export const App: React.FC = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="page-layout">
                <PageLoader />
            </div>
        );
    }
    return (
        <Routes>
            <Route path="/" element={<AuthenticationGuard component={HomePage} />}/>
        </Routes>
    );
};