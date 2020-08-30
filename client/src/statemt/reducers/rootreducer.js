import { ADD_ORGID } from "../actiontypes";

const initialState = {
    orgid:"",
    content:"",
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ORGID: {
            const { orgid, content } = action.payload;
            return {
                ...state,
                orgid:orgid,
                content:content,
            };
    }
    default:
        return state;
    }
}