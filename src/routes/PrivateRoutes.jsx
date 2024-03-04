import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/commons/Header";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            {auth?.user ? (
                <>
                    <Header />
                    <main className="mx-auto max-w-[1020px] py-8">
                        <div className="container">
                            <Outlet />
                        </div>
                    </main>
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
};

export default PrivateRoutes;
