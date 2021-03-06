import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Appointment from "./Pages/Appointment/Appointment";
import Consultants from "./Pages/Consultants/Consultants";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import TechnoDetails from "./Pages/TechnoDetails/TechnoDetails";
import Technologies from "./Pages/Technologies/Technologies";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/technologies/:techId">
              <TechnoDetails></TechnoDetails>
            </Route>
            <PrivateRoute path="/technologies">
              <Technologies></Technologies>
            </PrivateRoute>
            <Route path="/consultant/:docId">
              <Appointment></Appointment>
            </Route>
            <PrivateRoute path="/Consultants">
              <Consultants></Consultants>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
