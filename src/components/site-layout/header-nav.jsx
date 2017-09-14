import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import navItems from 'content/nav-items'
// import { stylesLoader } from 'utils/styles-loader'

export const NavItem = ({ name, to, description }) => (
	<li>
		<NavLink to={`/${to}`} title={description || name}>{name}</NavLink>
	</li>
)

NavItem.propTypes = {
	name: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export const HeaderNav = () => (
	<nav className="header-nav">
		<ul>
			{
				navItems
				.filter(({ displayInHeader }) => displayInHeader)
				.map(linkInfo => <NavItem key={linkInfo.name} {...linkInfo} />)
			}
		</ul>
	</nav>
)

export default connect(() => ({
	// Placeholder
}))(HeaderNav)
// }))(stylesLoader(require('styl/footer'))(HeaderNav))
