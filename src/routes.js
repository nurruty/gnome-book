import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import CitizensPage from './components/CitizensPage/CitizensPage';
import ProfessionsPage from './components/ProfessionsPage/ProfessionsPage';
import GnomePage from './components/GnomePage/GnomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route exact path="/citizens" component={CitizensPage} />
    <Route exact path="/professions" component={ProfessionsPage} />
    <Route path="/gnome/:gnomeID" component={GnomePage} />
  </Route>
);
