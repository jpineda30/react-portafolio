import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/home";
import Portafolio from "./components/pages/portafolio";
import Resume from "./components/pages/resume";
import Contact from "./components/pages/contact";

function App() {
  return (
    <>

      <Router>
      <div className="container flex-col">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Portafolio" component={Portafolio} />
        <Route exact path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
      </div>
      </Router>

    
    </>
  );
}

export default App;
