import React from 'react'

import ExternalLink from 'components/external-link'
import websitePortfolio from 'content/website-portfolio'
// import { stylesLoader } from 'utils/styles-loader'

export const Sites = () => (
	<div>
		<h2>Website Portfolio</h2>
		<p>Publically accessible websites from 2012-2014</p>

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
)

// export default stylesLoader(require('./sites.styl'))(Sites)
export default Sites
