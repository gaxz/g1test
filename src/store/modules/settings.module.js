import { REPLACE_TOGGLE } from '../mutations.type';

export const state = {
    isReplaceEnabled: true
};

export const mutations = {
    [REPLACE_TOGGLE](state, value) {
        state.isReplaceEnabled = value;
    }
};

export default {
    mutations,
    state
};