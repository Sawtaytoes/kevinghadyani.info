import React, { PropTypes } from 'react'

import graphicDesigns from 'content/graphic-designs'

export const FullSizeImage = ({ match: { params: { id } } }) => {
	const graphicDesign = graphicDesigns[id]

	if (!id || !graphicDesign) return null

	const { src = '', description = '' } = graphicDesign

	return (
		<img src={`/images/graphic-design/full/${src}.png`} alt={description} />
	)
}

FullSizeImage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}).isRequired,
	}).isRequired,
}

export default FullSizeImage
