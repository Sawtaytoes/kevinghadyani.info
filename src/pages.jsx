import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from 'components/pages/about'
import Graphics from 'components/pages/graphics'
import NoMatch from 'components/pages/no-match'
import SiteLayout from 'components/site-layout/site-layout'
import Sites from 'components/pages/sites'
import Skills from 'components/pages/skills'

const Pages = () => (
	<SiteLayout>
		<Switch>
			<Route exact path="/" component={About} />
			<Route path="/skills" component={Skills} />
			<Route path="/sites" component={Sites} />
			<Route path="/graphics" component={Graphics} />
			<Route component={NoMatch} />
		</Switch>
	</SiteLayout>
)

export default Pages
