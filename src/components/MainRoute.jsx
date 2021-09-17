import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Error from '../page/Error'
import Team from '../page/Team'
import Teams from '../page/Teams'
function MainRoute() {
    return (
        <div>
            <Switch>

                <Route exact path='/' component={Teams} />
                <Route exact path='/teams' component={Teams} />

                <Route exact path='/teams/:url' component={Team} />


                <Route component={Error}></Route>
            </Switch>
        </div>
    )
}

export default MainRoute
