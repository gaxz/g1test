import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import cards from "./modules/cards.module";
import settings from "./modules/settings.module";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        cards,
        settings
    }
});