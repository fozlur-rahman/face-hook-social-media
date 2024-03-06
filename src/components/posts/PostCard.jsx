import React from "react";
import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const PostCard = ({ post }) => {
    return (
        <>
            <article className="card mt-6 lg:mt-8">
                <PostHeader post={post} />
                <PostBody post={post} />
                <PostActions post={post} />
                <PostComments post={post} />
            </article>
        </>
    );
};

export default PostCard;
