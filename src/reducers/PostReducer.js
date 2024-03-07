import { actions } from "../actions/index";
const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const PostReducer = (state, action) => {
    switch (action.type) {
        case actions.posts.DATA_FETCHING:
            return {
                ...state,
                loading: true,
            };
        case actions.posts.DATA_FETCHED:
            return {
                ...state,
                loading: false,
                posts: action.data,
            };
        case actions.posts.DATA_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export { PostReducer, initialState };

// posts: {
//     DATA_FETCHING: "POST_DATA_FETCHING",
//     DATA_FETCHED: "POST_DATA_FETCHED",
//     DATA_FETCH_ERROR: "POST_DATA_FETCH_ERROR",

//     DATA_EDITED: "POST_DATA_EDITED",
//     POST_DELETED: "POST_DATA_DELETED",
//     POST_LIKED: "POST_LIKED",
//     POST_COMMENTED: "POST_COMMENTED",
// },
