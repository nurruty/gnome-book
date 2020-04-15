import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import HomePage from './pages/HomePage/HomePage';
import GnomesPage from './pages/GnomesPage/GnomesPage';
import ProfessionsPage from './pages/ProfessionsPage/ProfessionsPage';
import GnomePage from './pages/GnomePage/GnomePage';
import ProfessionPage from './pages/ProfessionPage/ProfessionPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route exact path="/gnomes" component={GnomesPage} />
    <Route exact path="/professions" component={ProfessionsPage} />
    <Route path="/gnome/:gnomeID" component={GnomePage} />
    <Route path="/profession/:professionName" component={ProfessionPage} />
  </Route>
);
