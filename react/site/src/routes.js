import { BrowserRouter, Switch, Route } from 'react-router-dom'

import devMonk from './pages/index.js'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={devMonk} />
            </Switch>
        </BrowserRouter>
    )
}