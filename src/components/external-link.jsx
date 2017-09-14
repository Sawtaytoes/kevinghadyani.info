import PropTypes from 'prop-types'
import React from 'react'

const ExternalLink = ({
	bold = false,
	children,
	className = '',
	href,
	name = '',
	noUnderline = true,
	title = '',
}) => (
	<a
		className={'no-text-underline' + (className ? ' ' + className : '')}
		href={href}
		title={title || name || (typeof children == 'string' && children) || null}
		target="_blank"
	>
		<span className={!noUnderline ? 'text-underline' : null}>{children || name}</span>
		&nbsp;
		<i className={'fa ' + (bold ? 'fa-external-link-square' : 'fa-external-link')}></i>
	</a>
)

ExternalLink.propTypes = {
	bold: PropTypes.bool,
	children: PropTypes.element,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	icon: PropTypes.string,
	name: PropTypes.string,
	noUnderline: PropTypes.bool,
	title: PropTypes.string,
}

export default ExternalLink
