import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/edit.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import Avator from "../../assets/images/avatars/avatar_1.png";
import Logo from "../../assets/images/logo.svg";
import Logout from "../auth/Logout";

const Header = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                {/* <!-- Logo --> */}

                <Link to="/">
                    <img
                        className="max-w-[100px] rounded-full lg:max-w-[130px]"
                        src={Logo}
                        alt="Your Logo"
                    />
                </Link>
                {/* <!-- nav links  --> */}
                <div className="flex items-center space-x-4">
                    <Link to="/" className="btn-primary">
                        <img src={HomeIcon} alt="Home" />
                        Home
                    </Link>
                    <button className="icon-btn">
                        <img src={NotificationIcon} alt="Notification" />
                    </button>
                    <Logout />

                    <button className="flex-center !ml-8 gap-3">
                        <span className="text-lg font-medium lg:text-xl">Sumit</span>
                        <img
                            className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                            src={Avator}
                            alt=""
                        />
                    </button>
                </div>
                {/* <!-- nav links ends --> */}
            </div>
        </nav>
    );
};

export default Header;
