import React, { useEffect } from "react";
import { actions } from "../actions/index";
import UserPosts from "../components/profile/UserPosts";
import UserProfileInfo from "../components/profile/UserProfileInfo";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

const ProfilePage = () => {
    const { state, dispatch } = useProfile();
    // const [error, setError] = useState(null);
    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCHING, loading: true });
        const featchProfile = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                        auth?.user?.id
                    }`
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                // to do
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: error.message,
                });
                console.log(error);
                setError(error);
            }
        };
        featchProfile();
    }, []);

    if (state?.loading) {
        return <div>user data loading...</div>;
    }

    return (
        <>
            <main className="mx-auto max-w-[1020px] py-8">
                <div className="container">
                    {/* <!-- profile info --> */}
                    <UserProfileInfo />
                    {/* <!-- end profile info --> */}

                    <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

                    {/* <!-- post  --> */}
                    <UserPosts />
                    {/* <!-- post ends --> */}
                </div>
            </main>
        </>
    );
};

export default ProfilePage;
