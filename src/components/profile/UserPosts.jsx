import React from "react";
import useProfile from "../../hooks/useProfile";
import PostsList from "../posts/PostsList";

const UserPosts = () => {
    const { state } = useProfile();
    const posts = state?.userPost;
    return (
        <>
            <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
            <PostsList posts={posts} />
        </>
    );
};

export default UserPosts;
