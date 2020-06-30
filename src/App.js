import React, { Component } from "react";
// import ResponsiveDrawer from "./components/ResponsiveDrawer";
import "./App.css";
// import YoutubeForm from "./components/YoutubeForm";
import Navbar1 from "./components/navbar";
import Navbar2 from "./components/Navbar2";
import Header from "./components/header";
import Header2 from "./components/header2";
import CardProducts from "./components/product.component";
import CenteredGrid from "./components/grid.component";
import ProductsSortingHeader from "./components/header3.component";
import Formex from "./components/form.component";
import Ticker from "./components/ticker.component";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar1 /> */}
        {/* <YoutubeForm /> */}
        {/* <ResponsiveDrawer />
        <h1>uioooooooooooohscklklklklklklklkljhnklkh</h1> */}
        {/* <Navbar2 />
        <Header />
        <Header2 /> */}
        {/* <CardProducts /> */}
        {/* <ProductsSortingHeader />
        <CenteredGrid></CenteredGrid> */}
        {/* <Formex /> */}
        <Ticker />
      </div>
    );
  }
}
