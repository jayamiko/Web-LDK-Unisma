import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/about/About";
import Header from "./components/common/header/Header";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Registration from "./components/registration/Registration";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <section className="hero">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/documentasi" component={Registration} />
            <Route exact path="/courses" component={CourseHome} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/journal" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
