import React from "react";

const PostCommentList = ({ postComment }) => {
    const { author, comment } = postComment;
    return (
        <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
            {postComment.map((comment, index) => (
                <div key={index} className="flex items-center gap-3 pt-4">
                    <img
                        className="max-w-6 max-h-6 rounded-full"
                        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                            comment.author.avatar
                        }`}
                        alt="avatar"
                    />
                    <div>
                        <div className="flex gap-1 text-xs lg:text-sm">
                            <span>{comment.author.name}: </span>
                            <span>{comment.comment} </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCommentList;
// author
// :
// avatar
// :
// "salahuddin@email.com"
// id
// :
// "ea168626-058e-49dd-b23c-3000e7bd0173"
// name
// :
// "MD Salahuddin"
// [[Prototype]]
// :
// Object
// comment
// :
// "❤️🔥"
// createdAt
// :
// "2024-02-24T12:36:38.047Z"
// id
// :
// "a0e37f88-ffc7-4fc7-952e-81370ff96269"
