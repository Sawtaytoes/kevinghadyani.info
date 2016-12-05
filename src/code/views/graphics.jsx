import React, { PureComponent } from 'react'
import { Match, Link } from 'react-router'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

const pathname = '/graphics'
const images = [{
	src: '01-ddr-club-logos',
	description: "Logos",
}, {
	src: '02-ddr-club-newsletter',
	description: "Newsletter",
}, {
	src: '03-ddr-inferno-poster',
	description: "Poster",
}]

const FullSizedImage = ({ params }) => {
	const { id } = params
	const { src = '', description = '' } = images[id]
	return (
		id && <img src={`/images/graphic-design/full/${src}.png`} alt={description} />
	)
}

class Graphics extends PureComponent {
	renderImages() { return (
		images.map(({ src, description }, index) => (
			<Link key={src} to={`${pathname}/${index}`} title={description}>
				<img src={`/images/graphic-design/thumbnail/${src}.png`} alt={description} />
			</Link>
		))
	)}

	renderFullImage

	render() { return (
		<div>
			<h2>Graphic Design Portfolio</h2>
			<h3>2006-2008</h3>
			<p>
				I created many graphic designs over the years before I went full-time in web development. These are a few I did for an organization I started, the UMKC DDR Club, at the University of Missouri-Kansas City.
			</p>

			{this.renderImages()}

			<Match pattern={`${pathname}/:id`} component={FullSizedImage} />
		</div>
	)}
}

export default stylesLoader.render(Graphics)
