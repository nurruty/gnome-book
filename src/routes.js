import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import GnomesPage from './components/GnomesPage/GnomesPage';
import ProfessionsPage from './components/ProfessionsPage/ProfessionsPage';
import GnomePage from './components/GnomePage/GnomePage';
import ProfessionPage from './components/ProfessionPage/ProfessionPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route exact path="/gnomes" component={GnomesPage} />
    <Route exact path="/professions" component={ProfessionsPage} />
    <Route path="/gnome/:gnomeID" component={GnomePage} />
    <Route path="/profession/:professionName" component={ProfessionPage} />
  </Route>
);
