import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import {PrivateRoute} from "./auth/PrivateRoute";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreatePost from './pages/CreatePost';
import StudentInfoPage from './pages/StudentInfoPage';
import ProfessorInfoPage from './pages/ProfessorInfoPage';
import AdminInfoPage from './pages/AdminInfoPage';
import PleaseVerifyEmailPage from './pages/PleaseVerifyEmailPage';
import EmailVerificationLandingPage from './pages/EmailVerificationLandingPage';
import PasswordResetLandingPage from './pages/PasswordResetLandingPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import StudentProfile from './pages/StudentProfile';
import MissingPage from './pages/MissingPage';




function App() {

  const [isOpen, setIsOpen] = useState(false);

  var isOn = localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') : "false";
  console.log(isOn);
  if (isOn === "true") {
    document.body.classList.add("dark-theme");
  }

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <Router forceRefresh={true}>

      <Sidebar isOpen= {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <Switch>

        <Route path = '/' exact component = {Home}/>
        {/* <Route path = '' exact component = {Home}/> */}
        <Route path = '/About' exact component = {About}/>
        <Route path = '/Contact' exact component = {Contact}/>
        <Route path = '/SignIn' exact component = {SignIn}/>
        <Route path = '/SignUp' exact component = {SignUp}/>
        <Route path = '/CreatePost' exact component = {CreatePost}/>        
        <Route path = '/PleaseVerifyEmail' exact component = {PleaseVerifyEmailPage}/>
        <Route path = '/verify-email/:verificationString' exact component = {EmailVerificationLandingPage}/>
        <Route path = '/forgot-password' exact component = {ForgotPasswordPage}/>
        <Route path = '/reset-password/:passwordResetCode' exact component = {PasswordResetLandingPage}/>
        <PrivateRoute path = '/StudentInfoPage' exact component = {StudentInfoPage}/>
        <Route path = '/StudentProfile' exact component = {StudentProfile}/>
        <PrivateRoute path = '/ProfessorInfoPage' exact component = {ProfessorInfoPage}/>
        <PrivateRoute path = '/AdminInfoPage' exact component = {AdminInfoPage}/>
        <Route path = '*' component = {MissingPage}/>

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
