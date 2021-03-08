import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ChatPage from "./views/ChatPage/ChatPage"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import Videos from "./views/Videos/Videos";
import Quizes from "./views/Quizes/Quizes";
import QuizInstructions from './views/Quizes/quiz/QuizInstructions';
import Kanban from "./views/Kanban/Kanban";
import Play from './views/Quizes/quiz/Play';
import QuizSummary from './views/Quizes/quiz/QuizSummary';
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
import HomePage from './views/HomePage/HomePage'
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div className="content_wrapper" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/chat" component={Auth(ChatPage, null)} />
          <Route exact path="/courses" component={Auth(LandingPage, null)} />
          <Route exact path="/Videos" component={Auth(Videos, true)} />
          <Route exact path="/Quizes" component={Auth(Quizes, true)} />
          <Route exact path="/Kanban" component={Auth(Kanban, true)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route path="/play/instructions" exact component={QuizInstructions} />
          <Route path="/play/quiz" exact component={Play} />
          <Route path="/play/quizSummary" exact component={QuizSummary} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
