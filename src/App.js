import ListPage from "./pages/ListPage";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GroceryPage from "./pages/GroceryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id">
            <GroceryPage />
          </Route>
          <Route path="/">
            <ListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
