import React, { PropTypes } from 'react'
import { Route, Link } from 'react-router-dom'

import graphicDesigns from 'content/graphic-designs'
// import { stylesLoader } from 'utils/styles-loader'

export const FullSizedImage = ({ match: { params: { id } } }) => {
	const graphicDesign = graphicDesigns[id]

	if (!id || !graphicDesign) return null

	const { src = '', description = '' } = graphicDesign

	return (
		<img src={`/images/graphic-design/full/${src}.png`} alt={description} />
	)
}

FullSizedImage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}).isRequired,
	}).isRequired,
}


export const Graphics = ({ match: { url } }) => (
	<div>
		<h2>Graphic Design Portfolio</h2>
		<h3>2006-2008</h3>
		<p>
			I created many graphic designs over the years before I went full-time in web development. These are a few I did for an organization I started, the UMKC DDR Club, at the University of Missouri-Kansas City.
		</p>

		{
			graphicDesigns.map(({ src, description }, index) => (
				<Link key={src} to={`${url}/${index}`} title={description}>
					<img src={`/images/graphic-design/thumbnail/${src}.png`} alt={description} />
				</Link>
			))
		}

		<Route path={`${url}/:id`} component={FullSizedImage} />
	</div>
)

Graphics.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
}

// export default stylesLoader(require('./graphics.styl'))(Graphics)
export default Graphics
