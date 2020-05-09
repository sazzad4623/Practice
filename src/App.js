import React, { Component } from "react";
// import ResponsiveDrawer from "./components/ResponsiveDrawer";
import "./App.css";
// import YoutubeForm from "./components/YoutubeForm";
import Navbar1 from "./components/navbar";
import Navbar2 from "./components/Navbar2";
import Header from "./components/header";
import Header2 from "./components/header2";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar1 /> */}
        {/* <YoutubeForm /> */}
        {/* <ResponsiveDrawer />
        <h1>uioooooooooooohscklklklklklklklkljhnklkh</h1> */}
        <Navbar2 />
        <Header />
        <Header2 />
      </div>
    );
  }
}
