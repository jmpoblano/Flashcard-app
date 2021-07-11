import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function Layout() {
  
  return (
    <div className="app-routes">
      <Header />
      <div className="container">
        <div className="row">
          <div className="column m-auto">
            {/* TODO: Implement the screen starting here */}
            <Router>
              <Switch>
                <Route exact={true} path ="/">{/*the home screen*/}
                  <DeckList/>
                </Route> 
                <Route exact={true} path ="/decks"> {/*the decks screen*/}
                    This will be the decks route
                </Route>
                <Route> 
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
