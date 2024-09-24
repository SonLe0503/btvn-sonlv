import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Countdown from "./components/countdown/index.jsx";
import Generate from "./components/generate/index.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Countdown />
        </Route>
        <Route path="/generate">
          <Generate />
        </Route>
        <Route exact path="/birthday/:name/:day/:month">
          <Countdown />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
