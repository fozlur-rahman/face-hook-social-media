import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div>home page</div>
            <Link to="/me">go to profile page</Link>
        </>
    );
};

export default HomePage;
