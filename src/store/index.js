import Vue from 'vue';
import Vuex from 'vuex';
import table from './modules/table';

Vue.use(Vuex);

const state = {

};

export default new Vuex.Store({
	// mode: 'history',
	modules: {
		table,
	},
});
