import React, { useState } from "react";
import PostCommentList from "./PostCommentList";

const PostComments = ({ post }) => {
    const [showComment, setShowComment] = useState(true);
    return (
        <div>
            {/* <!-- comment input box --> */}
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                        post.author.avatar
                    }`}
                    alt="avatar"
                />

                <div className="flex-1">
                    <input
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>
            {/* <!-- comment filter button --> */}
            <div className="mt-4">
                <button
                    onClick={() => setShowComment(!showComment)}
                    className="text-gray-300 max-md:text-sm"
                >
                    All Comment ▾
                </button>
            </div>
            {/* <!-- comments --> */}
            {showComment && <PostCommentList postComment={post?.comments} />}

            {/* <!-- comments ends --> */}
        </div>
    );
};

export default PostComments;
