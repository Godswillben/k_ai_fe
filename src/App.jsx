import React from "react";
import ReactGA from "react-ga4"
import Draw from "./pages/Draw";
import LandingPage from "./pages/Landing";

ReactGA.initialize("G-PXYB62TPL0");

function App() {
  return (
    <>
    <LandingPage />
      {/* <Draw /> */}
    </>
  )
}

export default App
