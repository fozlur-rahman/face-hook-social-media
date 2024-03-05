// import { data } from "autoprefixer";
import { actions } from "../actions/index";

const initialState = {
    user: null,
    userPost: [],
    loading: false,
    error: null,
};

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.profile.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action.data.user,
                userPost: action.data.posts,
            };
        }

        case actions.profile.USER_DATA_EDITED: {
            return {
                ...state,
                loading: false,
                user: action.data,
            };
        }

        case actions.profile.IMAGE_UPDATED: {
            return {
                ...state,
                loading: false,
                user: {
                    ...action.data,
                    avatar: action.data.avatar,
                },
            };
        }

        case actions.profile.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.data,
            };
        }

        default: {
            return state;
        }
    }
};

export { ProfileReducer, initialState };
