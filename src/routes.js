import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const HeroesRoutes = () => (
    <Router>
        <div>
            <PersistentDrawerLeft />
            <Switch>
                <Route exact path="/marketplace" component={compo1} />
                <Route path="/ultimas-compras" component={compo2} />
            </Switch>
        </div>
    </Router>
)