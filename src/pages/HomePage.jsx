import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { actions } from "../actions/index";
import PostsList from "../components/posts/PostsList";
import { useAxios } from "../hooks/useAxios";
import { PostReducer, initialState } from "../reducers/PostReducer";

const HomePage = () => {
    const { api } = useAxios();

    const [state, dispatch] = useReducer(PostReducer, initialState);
    console.log(state);

    useEffect(() => {
        dispatch({ type: actions.posts.DATA_FETCHING });

        const fetchPosts = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
                );
                if (response.status === 200) {
                    console.log(response.data);
                    dispatch({
                        type: actions.posts.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                dispatch({
                    type: actions.posts.DATA_FETCH_ERROR,
                    error: error.message,
                });
            }
        };
        fetchPosts();
    }, []);
    if (state?.loading) {
        return (
            <div className="text-xl bg-black text-gray-300 p-4">
                Post data loading...
            </div>
        );
    }
    if (state?.error) {
        return (
            <div className="text-xl bg-black text-gray-300 p-4">
                Error in fecthing posts ${state?.error}
            </div>
        );
    }
    return (
        <>
            <div>home page</div>
            <Link to="/me">go to profile page</Link>
            <PostsList posts={state?.posts} />
        </>
    );
};

export default HomePage;

// posts: {
//     DATA_FETCHING: "POST_DATA_FETCHING",
//     DATA_FETCHED: "POST_DATA_FETCHED",
//     DATA_FETCH_ERROR: "POST_DATA_FETCH_ERROR",

//     DATA_EDITED: "POST_DATA_EDITED",
//     POST_DELETED: "POST_DATA_DELETED",
//     POST_LIKED: "POST_LIKED",
//     POST_COMMENTED: "POST_COMMENTED",
// },
