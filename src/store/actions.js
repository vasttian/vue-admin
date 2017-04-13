import * as types from './mutation-types';

export default {
	removeUserSuccess({ commit }) {
		const messages = '删除成功!';
		commit(types.SUCCESSFUL_MESSAGE, { messages: messages });
	},
	editUserSuccess({ commit }) {
		const messages = '提交成功!';
		commit(types.SUCCESSFUL_MESSAGE, { messages: messages });
	},
	addUserSuccess({ commit }) {
		const messages = '新增成功!';
		commit(types.SUCCESSFUL_MESSAGE, { messages: messages });
	},
};
