import PropTypes from 'prop-types'
import React from 'react'

import graphicDesigns from 'content/graphic-designs'
import Modal from 'components/modal'
import { stylesLoader } from 'utils/styles-loader'

export const FullSizeImage = ({ match: { url, params: { id } } }) => {
	const graphicDesign = graphicDesigns[id]

	if (!id || !graphicDesign) return null

	const { src = '', description = '' } = graphicDesign

	return (
		<Modal returnUrl={url}>
			<img className="full-size-image" src={`/images/graphic-design/full/${src}.png`} alt={description} />
		</Modal>
	)
}

FullSizeImage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}).isRequired,
	}).isRequired,
}

export default stylesLoader(require('./full-size-image.styl'))(FullSizeImage)
