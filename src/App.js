import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetupPages from "./pages/AllMeetup";
import NewMeetupPages from "./pages/NewMeetup";
import FavouritePages from "./pages/Favourites";
import Layout from "./componenents/layout/Layout";

function App() {
  return (
    <div className="div">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupPages />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPages />
          </Route>
          <Route path="/favourite">
            <FavouritePages />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
