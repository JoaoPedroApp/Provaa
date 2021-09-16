import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Prova from './pages/index.js'

import Prova from './pages/index.js'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Prova} />
            </Switch>
        </BrowserRouter>
    )
}