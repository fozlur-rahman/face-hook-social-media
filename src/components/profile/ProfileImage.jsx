import { useRef } from "react";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import { useAxios } from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";

const ProfileImage = () => {
    const { state, dispatch } = useProfile();

    const { api } = useAxios();

    const fileRef = useRef();

    const handleImageUpload = (e) => {
        e.preventDefault();
        fileRef.current.click();
        fileRef.current.addEventListener("change", updateImageDisplay);
    };

    const updateImageDisplay = async () => {
        try {
            const formData = new FormData();

            for (const file of fileRef.current.files) {
                formData.append("avatar", file);
            }

            const response = await api.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                    state?.user?.id
                }/avatar`,
                formData
            );

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.IMAGE_UPDATED,
                    data: response.data,
                });
            }
        } catch (err) {
            dispatch({ type: actions.profile.DATA_FETCH_ERROR, data: err.message });
        }
    };

    return (
        <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <img
                className="max-w-20 rounded-full max-h-20 bg-white"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                    state?.user?.avatar
                }`}
                alt="edit"
            />

            <form action="">
                <input id="file" type="file" ref={fileRef} hidden />
                <button
                    type="submit"
                    onClick={handleImageUpload}
                    className="flex-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
                >
                    <img src={EditIcon} alt="Edit" />
                </button>
            </form>
        </div>
    );
};

export default ProfileImage;
