import React from 'react'

import HeaderNav from 'components/site-layout/header-nav'
// import { stylesLoader } from 'utils/styles-loader'

export const Header = () => (
	<header className="header">
		<h1>Kevin Ghadyani <small>Web Applications Developer</small></h1>

		<p>
			I developed a passion for creating websites when I was 12. Just as the entire web world has grown and changed, so have my abilities. This site is a showcase of my current talents in Web Development.
		</p>

		<HeaderNav />
	</header>
)

// export default stylesLoader(require('styl/header'))(Header)
export default Header
