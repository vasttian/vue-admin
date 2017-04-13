import Vue from 'vue';
import Vuex from 'vuex';
import table from './modules/table';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {

};

export default new Vuex.Store({
	// mode: 'history',
	modules: {
		table,
	},
	actions,
	mutations,
});
