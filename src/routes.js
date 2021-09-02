import React from 'react'; 
import {Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Reserve from './Pages/Reserve';

const Routes = ()=>{
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/reservas' component={Reserve} />
        </Switch>
    )
}

export default Routes;