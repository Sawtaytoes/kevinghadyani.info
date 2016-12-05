import React, { PureComponent } from 'react'
// import GoogleAnalytics from 'react-g-analytics'

// Components
import Header from 'components/header'
import Footer from 'components/footer'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('normalize.css'))
.add(require('styl/global'))
.add(require('styl/site'))

class Master extends PureComponent {
	render() { return (
		<div>
			{/*TODO: Get a working component for importing Google Analytics*/}
			{/*<GoogleAnalytics id="UA-9315566-8" />*/}
			<hr className="site-background" />

			<div className="site-go-to-top" id="js-go-to-top">
				<a className="site-go-to-top__link" href="#top" onClick={this.handleGoToTop}><i className="fa fa-arrow-up"></i></a>
			</div>

			<div className="site-container">
				<header className="site-header">
					<Header />
				</header>

				<div className="site-content-container js-click-body">
					<div className="site-content">
						<main className="site-main">
							{this.props.children}
						</main>

						<footer className="site-footer">
							<Footer />
						</footer>
					</div>
				</div>
			</div>
		</div>
	)}
}

export default stylesLoader.render(Master)
