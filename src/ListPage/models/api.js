import {
    getApi
} from './../../../services/api.js'

export default {

    namespace: 'zyy',

    state: {
        name: 'zyy'
    },

    effects: {
        * fetch({
            payload,
            callback
        }, {
            call,
            put
        }) {
            const response = yield call(getApi, payload)
            yield put({
                type: 'save',
                payload: response.data,
                key: 'getData'
            });
            if (callback) callback()
        },
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                [action.key]: action.payload
            };
        },
    },

};