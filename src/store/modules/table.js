import { getUserListPage } from '../../api/api';
import * as types from '../mutation-types';

const state = {
	userObj: {
		users: [],
		total: 0,
	},
};

const getters = {
	users: state => state.userObj.users,
	total: state => state.userObj.total,
};


const actions = {
	getUsers({ commit }, para) {
		getUserListPage(para).then((value) => commit(types.GET_USERS, {value}));
	}
};

const mutations = {
	[types.GET_USERS](state, {value}) {
		state.userObj = value.data;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
