import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import React from "react";

import Home from "./Pages/home";
import PlanWrapper from "./Pages/plan";
// import PlanController from "./Pages/planController";
import ContactUs from "./Pages/contactUs";
import EventType from "./Pages/eventType";
import EventWrapper from "./Pages/event";
import Faq from "./Pages/faq";
import ScrollToTop from "./Components/scrollToTop";
// import LandingPage from "./Pages/landing";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <NavBar />
        <Routes>
          {/* comment below out till fixed
          <Route path="/landing" element={<LandingPage/>} />  */}
          <Route exact path='/' element={<Home />} />   
          <Route path='/plan' element={ <PlanWrapper />} /> 
          <Route path='/help' element={<Faq />} />
          <Route path='/eventType' element={<EventType />} />
          <Route path='/event' element={<EventWrapper />} />
          <Route path='/contactus' element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
      {/* <Event /> */}
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <Plan /> */}
    </div>
  );
}

export default App;
