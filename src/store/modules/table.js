import { getUserListPage, removeUser, getUserList, editUser } from '../../api/api';
import * as types from '../mutation-types';

const state = {
	userObj: {
		users: [],
		total: 0,
	},
	listLoading: false,
	editLoading: false,
};

const getters = {
	users: state => state.userObj.users,
	total: state => state.userObj.total,
	listLoading: state => state.listLoading,
	editLoading: state => state.editLoading,
};


const actions = {
	getUsers({ commit, state }, para) {
		state.listLoading = true;
		getUserListPage(para).then((value) => {
			commit(types.GET_USERS, { value });
			state.listLoading = false;
		});
	},
	removeUser({ dispatch, commit, state }, para) {
		state.listLoading = true;
		removeUser({ id: para.id }).then((value) => {
			// commit(types.REMOVE_USER, {value});
			dispatch('getUsers', para);
		});
	},
	getUser({ commit, state }, para) {
		state.listLoading = true;
		getUserList(para).then((value) => {
			commit(types.GET_USERS, { value });
			state.listLoading = false;
		});
	},
	editUser({ dispatch, commit, state }, para) {
		state.editLoading = true;
		editUser(para).then((value) => {
			dispatch('getUsers', para.all);
			state.editLoading = false;
		});
	}
};

const mutations = {
	[types.GET_USERS](state, { value }) {
		state.userObj = value.data;
	},
	[types.REMOVE_USER](state, { value }) {
		// state.userObj = value.data;
	},

};

export default {
	state,
	getters,
	actions,
	mutations,
};
