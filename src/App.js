import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/home';
import AboutMe from './components/about-me';
import Projects from './components/projects';
import Shop from './components/shop';
import NavBar from './components/nav-bar';

export default function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <section>
          <NavBar/>
          <Route exact path="/about-me" component={AboutMe}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/shop" component={Shop}/>
        </section>
    </Router>
  );
}
