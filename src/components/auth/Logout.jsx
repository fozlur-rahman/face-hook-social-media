import React from "react";
import { useNavigate } from "react-router-dom";
import LogOutIcon from "../../assets/icons/logout.svg";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    };
    return (
        <button onClick={handleLogout} className="icon-btn">
            <img src={LogOutIcon} alt="Logout" />
        </button>
    );
};

export default Logout;
