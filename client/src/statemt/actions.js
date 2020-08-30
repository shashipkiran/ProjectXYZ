import {ADD_ORGID} from './actiontypes';

export const OrgRecAction = (orgid,content) => ({
    type: ADD_ORGID,
    payload: {
        orgid: orgid,
        content: content,
    }
});