import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
