import * as types from './mutation-types';
import { Message } from 'element-ui';

export default {
	[types.SUCCESSFUL_MESSAGE](state, { messages }) {
		Message.success({
			message: messages,
		});
	},
	[types.FAILING_MESSAGE](state, { value }) {

	},
};
