import { useState } from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
const PostActions = ({ post }) => {
    const { auth } = useAuth();
    const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));
    const commentCount = post?.comments.length;
    const { api } = useAxios();
    const handleLiked = async () => {
        try {
            const response = await api.patch(
                `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/like`
            );
            if (response.status == 200) {
                setLiked(!liked);
            }
        } catch (error) {
            console.log(error);
            setLiked(false);
        }
    };
    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            {/* <!-- Like Button --> */}
            <button
                onClick={handleLiked}
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                {liked ? <img src={LikeIcon} alt="Like" /> : <span>Like now</span>}
            </button>

            {/* <!-- Comment Button --> */}
            <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
                <img src={CommentIcon} alt="Comment" />
                <span>Comment( {commentCount})</span>
            </button>
            {/* <!-- Share Button --> */}

            {/* <!-- Like Button --> */}
            <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
                <img src={ShareIcon} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
};

export default PostActions;
