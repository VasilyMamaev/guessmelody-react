import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = () => {
  return <WelcomeScreen
    time={5}
    errorCount={3}
  />;
};

export default App;
