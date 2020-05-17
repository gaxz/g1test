import { CARD_ADD, CARD_REPLACE } from '../mutations.type';
import Vue from 'vue';

export const state = [
    {
        title: 'Card 1',
        content: 'Some text for a preview.'
    },
    {
        title: 'Card 2',
        content: 'Some text for a preview. Some text for a preview.'
    },
];

export const mutations = {
    [CARD_ADD](state, payload) {
        state.push(payload);
    },
    [CARD_REPLACE](state, payload) {
        Vue.set(this.state, 'cards', payload);
    }
};

export default {
    mutations,
    state
};