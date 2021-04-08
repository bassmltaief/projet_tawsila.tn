
import "./App.css";
import Login from "./components/logreg/Login";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import Footers from "./components/footer/Footer";
import Annance from "./components/annance/Anannce";
import About from "./components/about/About";
import FQA from "./components/about/Fqa";
import Modannance from "./components/annance/Modannance";
import Signup from "./components/logreg/Signup";
import Profile from "./components/profile/Profile";
import home from "./components/navbar/home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "./js/actions/userAction";
import 'mdbreact/dist/css/mdb.css';
import AddAnnance from "./components/annance/Addannance";
import LogAdmin from "./components/logreg/logadmin";
import allUsers from "./components/profile/allUser";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route path="/register" component={Login}/>
        <Route path="/contact" component={Contact} />
        <Route path="/annance" component={Annance} />
        <Route path="/about" component={About}/>
        <Route path="/FQA" component={FQA}/>
        <Route path="/newannance" component={AddAnnance}/>
        <Route path="/modifiedannance/:id" component={Modannance}/>
        <Route path="/sing" component={Signup}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/Home" component={home}/>
        <Route path="/admin" component={LogAdmin}/>
        <Route path="/admin/users"component={allUsers}/>
      </Router>
      <Footers/>
    </div>
  );
}

export default App;
