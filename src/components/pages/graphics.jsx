import PropTypes from 'prop-types'
import React from 'react'
import { Route, Link } from 'react-router-dom'

import FullSizeImage from 'components/graphics/full-size-image'
import graphicDesigns from 'content/graphic-designs'
// import { stylesLoader } from 'utils/styles-loader'

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

		<Route path={`${url}/:id`} component={FullSizeImage} />
	</div>
)

Graphics.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
}

// export default stylesLoader(require('./graphics.styl'))(Graphics)
export default Graphics
