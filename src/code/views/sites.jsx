import React, { PureComponent } from 'react'

// Components
import ExternalLink from 'components/external-link'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Content
import websitePortfolio from 'content/website-portfolio'

// Styles
const stylesLoader = StylesLoader.create()

class Sites extends PureComponent {
	render() { return (
		<div>
			<h2>Website Portfolio</h2>
			<p>Some recent sites from 2012-14</p>

			{websitePortfolio.map(({ name, link, publishDate, content }) => (
				<div key={name}>
					<h3>{link.to ? <ExternalLink
						name={name}
						href={link.to}
						title={link.description}
					/> : name}</h3>

					<div>{publishDate}</div>

					{content.map(({ title, description, list }) => (
						<dl key={title}>
							<dt>{title}</dt>
							<dd>
								{description && <p>{description}</p>}
								{list && <ul>{list.map(text => (
									<li key={text}>{text}</li>
								))}</ul>}
							</dd>
						</dl>
					))}
				</div>
			))}
		</div>
	)}
}

export default stylesLoader.render(Sites)
