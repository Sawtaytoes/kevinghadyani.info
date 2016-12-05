import React, { PureComponent } from 'react'

// Components
import HeaderNav from './header-nav'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
// .add(require('styl/header'))

class Header extends PureComponent {
	render() { return (
		<header className="header">
			<h1>Kevin Ghadyani <small>Web Applications Developer</small></h1>
			<p>
				I developed a passion for creating websites when I was 12. Just as the entire web world has grown and changed, so have my abilities. This site is a showcase of my current talents in Web Development.
			</p>
			<HeaderNav />
		</header>
	)}
}

export default stylesLoader.render(Header)
