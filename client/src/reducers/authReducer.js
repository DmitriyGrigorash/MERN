import {FETCH_USER, FETCH_USER_ERROR, SUBMIT_SURVEY, SUBMIT_SURVEY_ERROR} from "../actions/types";

const initialState = {
    isAuth: false,
};

export default function ( state = initialState, action ) {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, isAuth: action.payload };
        case FETCH_USER_ERROR:
            return { ...state, error: action.payload };
        case SUBMIT_SURVEY:
            return { ...state, survey: action.payload, isAuth: action.payload.credits };
        case SUBMIT_SURVEY_ERROR:
            return { ...state, surveyError: action.payload };
        default:
            return state;
    }
}
