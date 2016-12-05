import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
// .add(require('styl/header-nav'))

// Content
import navItems from 'content/nav-items'

class HeaderNav extends PureComponent {
	renderNavItems() { return (
		<ul>
			{
				navItems
				.filter(({displayInHeader}) => displayInHeader)
				.map(x => this.renderNavItem(x))
			}
		</ul>
	)}

	renderNavItem({ name, to, description }) {
		return (
			<li key={name}>
				<Link to={`/${to}`} title={description || name}>{name}</Link>
			</li>
		)
	}

	render() { return (
		<nav className="header-nav">
			{this.renderNavItems()}
		</nav>
	)}
}

export default connect(() => ({
	// Placeholder
}))(stylesLoader.render(HeaderNav))
