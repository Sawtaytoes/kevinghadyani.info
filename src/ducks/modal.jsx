// --------------------------------------------------------
// Actions
// --------------------------------------------------------

const CHANGE_META_DATA = 'PAGE_META::CHANGE_META_DATA'


// --------------------------------------------------------
// Action Creators
// --------------------------------------------------------

export const changeLocation = payload => {
	return {
		type: LOCATION_CHANGED,
		payload,
	}
}

export const updatePageMeta = path => {
	return {
		type: CHANGE_META_DATA,
		path
	}
}


// --------------------------------------------------------
// Reducer
// --------------------------------------------------------

export const getInitialState = () => ({
	blah: '',
})

export default (state = getInitialState(), action) => {
	const { type } = action

	switch (type) {
	// case CHANGE_META_DATA: {

	// }

	default:
		return state
	}
}
