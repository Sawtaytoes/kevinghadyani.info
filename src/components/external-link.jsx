import React, { PureComponent, PropTypes } from 'react'

export default class ExternalLink extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.element,
		href: PropTypes.string.isRequired,
		title: PropTypes.string,
		name: PropTypes.string,
		icon: PropTypes.string,
		bold: PropTypes.bool,
		noUnderline: PropTypes.bool,
	};

	static defaultProps = {
		className: '',
		title: '',
		name: '',
		icon: '',
		bold: false,
		noUnderline: true,
	}

	render() {
		const {
			bold,
			children,
			className,
			href,
			name,
			noUnderline,
			title,
		} = this.props

		return (
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
	}
}
