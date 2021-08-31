import "./App.css";
import Main from "./pages/main/Main";
import SignIn from "./components/signin/SignIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
          <Switch>
              <Route path="/admin" component={Main}/>
              <Route path="/login" component={SignIn}/>
          </Switch>
       </Router>   

      
    </div>
  );
}

export default App;
