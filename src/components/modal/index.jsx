import React from 'react'
import { Route } from 'react-router-dom'

import ModalContainer from 'components/modal/modal-container'

export const Modal = () => (
	<Route path="/modal" component={ModalContainer} />
)

export default Modal
