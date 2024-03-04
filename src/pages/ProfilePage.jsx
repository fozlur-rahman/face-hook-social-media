import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [userPost, setUserPost] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        const featchProfile = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                        auth?.user?.id
                    }`
                );
                setUser(response?.data?.user);
                setUserPost(response?.data?.posts);
            } catch (error) {
                // to do
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        featchProfile();
    }, []);

    if (isLoading) {
        return <div>user data loading...</div>;
    }
    return (
        <>
            <div>ProfilePage {user?.firstName}</div>
            <p>you have {userPost.length}</p>
        </>
    );
};

export default ProfilePage;
