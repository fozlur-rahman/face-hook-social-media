import { useState } from "react";
import { api } from "../../api/index";
import CheckIcon from "../../assets/icons/close.svg";
import EditIcon from "../../assets/icons/edit.svg";
import useProfile from "../../hooks/useProfile";

import { actions } from "../../actions";

const Bio = () => {
    const { state, dispatch } = useProfile();
    const [bio, setBio] = useState(state?.user?.bio);
    const [editMode, setEditMode] = useState(false);

    const handleEdit = async () => {
        dispatch({ type: actions.profile.DATA_FETCHING });
        try {
            const response = await api.patch(`/profile/${state?.user?.id}`, { bio });
            if (response.status === 200) {
                dispatch({
                    type: actions.profile.USER_DATA_EDITED,
                    data: response.data,
                });
            }
            setEditMode(false);
        } catch (err) {
            dispatch({ type: actions.profile.DATA_FETCH_ERROR, data: err.message });
        }
    };

    return (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
                {!editMode ? (
                    <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
                ) : (
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="form-control text-gray-700 p-3 rounded"
                        rows={4}
                        cols={55}
                    />
                )}
            </div>
            {!editMode ? (
                <button
                    onClick={() => setEditMode(true)}
                    className="flex-center h-7 w-7 rounded-full"
                >
                    <img src={EditIcon} alt="Edit" />
                </button>
            ) : (
                <button
                    onClick={handleEdit}
                    className="flex-center h-7 w-7 rounded-full"
                >
                    <img src={CheckIcon} alt="Edit" />
                </button>
            )}
        </div>
    );
};

export default Bio;
