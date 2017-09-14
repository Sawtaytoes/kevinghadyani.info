import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { stylesLoader } from 'utils/styles-loader'

export const Modal = ({ children, closeModal }) => (
	<div className="modal" onClick={closeModal}>
		<div className="modal__body">{children}</div>
	</div>
)

Modal.propTypes = {
	children: PropTypes.element.isRequired,
	closeModal: PropTypes.func.isRequired,
	returnUrl: PropTypes.string.isRequired,
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch, { returnUrl }) => ({
	closeModal: () => dispatch(push(returnUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(
	stylesLoader(require('./modal.styl'))(Modal)
)
