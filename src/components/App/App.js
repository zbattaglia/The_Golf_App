// importing router
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// importing pages
import groupPage from '../GroupPage/group';
import partnerPage from '../PartnerPage/partner';
import currentHolePage from '../CurrentHolePage/currentHole';

// style imports
import './App.css';

function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
          {/* Visiting localhost:3000 (or generic web address) will redirect to localhost:3000/group */}
          {/* This is the current "home" page where user selects members for game */}
          <Redirect exact from = "/" to = "group"/>
          {/* Visting localhost:3000/group will take them to the group page as well */}
          <Route
            exact
            path = "/group"
            component={groupPage}
          />
          {/* Visiting localhost:3000/partner will take user to select partner page */}
          <Route
            exact
            path = "/partner"
            component = {partnerPage}
          />
          {/* Visiting localhost:3000/currentHole will take user to the score page for current hole */}
          <Route
            exact
            path = "/currentHole"
            component = {currentHolePage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
