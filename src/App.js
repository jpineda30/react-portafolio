import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/home";
import Portafolio from "./components/pages/portafolio";
import Resume from "./components/pages/resume";
import Contact from "./components/pages/contact";
import "./css/bulma.css";
import "./css/flex-menu.css";
import "./css/main.css";
import "./css/Scroll.css";
import "./icons/fontawesome-free-5.15.1-web/css/all.css";


function App() {
  return (
    <>

      <Router>
      <div className="container flex-col">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/react-portafolio/" component={Home} />
        <Route exact path="/Portafolio" component={Portafolio} />
        <Route exact path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
      </div>
      </Router>

    
    </>
  );
}

export default App;
