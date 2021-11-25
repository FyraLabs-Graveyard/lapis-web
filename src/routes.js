import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/builds" component={builds} />
        <Route path="/settings" component={settings} />
        <Route path="*" component={NotFound} />
        <Route path="/buildroots" component={buildroots} />
        <Route path="/buildroot/:id" component={buildroot} />
        <Route path="/tasks" component={tasks} />
        <Route path="/task/:id" component={task} />
        <Route path="/users" component={users} />
        <Route path="/user/:id" component={user} />
    </Route>
);