import React, { PropTypes } from 'react'
// import GoogleAnalytics from 'react-g-analytics'

import Footer from 'components/site-layout/footer'
import Header from 'components/site-layout/header'
import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('normalize.css'))
.add(require('./global.styl'))
.add(require('./site-layout.styl'))

export const SiteLayout = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
		{/*<GoogleAnalytics id="UA-????????-?" />*/}
	</div>
)

SiteLayout.propTypes = {
	children: PropTypes.node.isRequired
}

export default stylesLoader.render(SiteLayout)
