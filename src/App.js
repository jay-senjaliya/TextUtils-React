// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    //////////////////////////////////////////////////////////////
    //Color Pallete on Navbar for different differrent color modes
    //////////////////////////////////////////////////////////////
    // const toggleMode = (cls) => {
    // // MOde = Primary
    // if (cls === "primary") {
    //   if (mode === "primary") {
    //     setMode("light");
    //     document.body.style.backgroundColor = "white";
    //     showAlert("Light Mode Enabled Successfully", "success");
    //   } else {
    //     setMode("primary");
    //     document.body.style.backgroundColor = "#1f24bf";
    //     showAlert("Primary Mode Enabled Successfully", "success");
    //   }
    // }
    // // MOde = Danger
    // if (cls === "danger") {
    //   if (mode === "danger") {
    //     setMode("light");
    //     document.body.style.backgroundColor = "white";
    //     showAlert("Light Mode Enabled Successfully", "success");
    //   } else {
    //     setMode("danger");
    //     document.body.style.backgroundColor = "#99110c";
    //     showAlert("Danger Mode Enabled Successfully", "success");
    //   }
    // }
    // // MOde = Success
    // if (cls === "success") {
    //   if (mode === "success") {
    //     setMode("light");
    //     document.body.style.backgroundColor = "white";
    //     showAlert("Light Mode Enabled Successfully", "success");
    //   } else {
    //     setMode("success");
    //     document.body.style.backgroundColor = "#063b11";
    //     showAlert("Success Mode Enabled Successfully", "success");
    //   }
    // }
    // // MOde = Dark
    // if (cls === "dark") {
    //   if (mode === "dark") {
    //     setMode("light");
    //     document.body.style.backgroundColor = "white";
    //     showAlert("Light Mode Enabled Successfully", "success");
    //   } else {
    //     setMode("dark");
    //     document.body.style.backgroundColor = "#3b3d3d";
    //     showAlert("Dark Mode Enabled Successfully", "success");
    //   }
    // }

    // Only Dark and light Mode
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b3d3d";
      showAlert("Dark Mode Enabled Successfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled Successfully", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter Text to Analyze below"
          mode={mode}
        />
        {/* }
              /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
