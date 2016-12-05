import {
	SET_TAP_START_TIME,
	ADD_TAP_MESSAGE,
} from 'actions/tap'

const getMessageFromLine = (line, identifier) => {
	return line.match(new RegExp(`^${identifier}[ ]*(.+)$`))[1]
}

const getTapStats = (state) => {
	var { messages, total, passed, failed, hasFailures } = state

	if (total && passed && failed && hasFailures) {
		return state
	}

	messages.forEach(line => {
		if (!hasFailures && line.search(/^(not ok)/) === 0) {
			state.hasFailures = true

		} else if (!total && line.search(/^(# tests)/) === 0) {
			state.endTime = new Date()

			const secondInMilliseconds = 1000
			state.duration = (state.endTime - state.startTime) / secondInMilliseconds

			state.total = getMessageFromLine(line, '# tests')

		} else if (!passed && line.search(/^(# pass)/) === 0) {
			state.passed = getMessageFromLine(line, '# pass')

		} else if (!failed && line.search(/^(# fail)/) === 0) {
			state.failed = getMessageFromLine(line, '# fail')
		}
	})

	return state
}

export default (state = {}, action) => {
	let {
		type,
		startTime,
		message,
	} = action

	switch (type) {
	case SET_TAP_START_TIME:
		return {
			...state,
			startTime
		}

	case ADD_TAP_MESSAGE: {
		let messages = state.messages ? state.messages.slice() : [],
			newState = {}

		// Check if we've gotten a valid TAP message
		if (message.search(/^[(not ok)(ok)(\s\s)(#\s)]+.+$/) === 0) {
			messages.push(message)

			newState = getTapStats({
				...state,
				messages
			})
		}

		return {
			...state,
			...newState,
		}
	}

	default:
		return state
	}
}
