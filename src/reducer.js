import { REFRESH } from './ActionTypes.js'

export default function refresh(state = {time: new Date().toLocaleDateString}, action) {
	switch (action.type) {
		case REFRESH:
			return {time: action.data}
		default:
			return state;
	}
}