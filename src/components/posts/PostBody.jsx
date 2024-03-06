import React from "react";

const PostBody = ({ post }) => {
    const { content, image } = post;
    return (
        <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
            {/* <!-- If Post has Image, Render this block --> */}
            <div className="flex items-center justify-center overflow-hidden">
                <img
                    className="max-w-full"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${image}`}
                    alt="poster"
                />
            </div>
            <p className="mt-5">{content}</p>
        </div>
    );
};

export default PostBody;
