import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import createReactClass from "create-react-class";
import Reactable from "reactable";
import "rc-menu/assets/index.css";
import { Grid, Row, Col } from "react-flexbox-grid";

var Table = Reactable.Table;
const img1 = require("./Image/img1.jpg");
const img2 = require("./Image/img2.jpg");
const img3 = require("./Image/img3.jpg");
const img4 = require("./Image/img4.jpg");
const img5 = require("./Image/img5.jpg");
const img6 = require("./Image/img6.jpg");
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
var imageUrl=[]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello!",
      logoGg:
        "https://www.google.com.vn/logos/doodles/2017/googles-19th-birthday-5117501686939648.2-s.png"
    };
  }

  componentDidMount(){
    fetch("http://api.svina.net/api/category/GetAllCategories",
      { method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNvbmx2MDAwOTlAZ21haWwuY29tIiwiRW50aXR5SUQiOjEsIlJvbGVzIjoiQ29uc3VtZXIsU3RvcmUiLCJuYmYiOjE1MDY5MTQ5ODksImV4cCI6MTUwNzUxOTc4OSwiaWF0IjoxNTA2OTE0OTg5LCJpc3MiOiJGYXJtb3VzSXNzdWVyIiwiYXVkIjoiRmFybW91c0F1ZGllbmNlIn0.gOwb-oONsRjTz5bTofbVLT0znw16YRu7ZgzQaTavycg'
        },
      }).then((response) => {
        response.json().then((responseJson) => {
          console.log("responseJson",responseJson)
          for(var i in responseJson.model){
            imageUrl=[]
            imageUrl.push(responseJson.model[i].imageUrl)
            console.log("imageUrl",imageUrl)
          }
          alert("get cate success")
          })
        })
  }

  onClick(info) {
    console.log("click ", info);
  }

  SwipeAuto() {
    return (
      <AutoPlaySwipeableViews enableMouseEvents="true" style={{ width: "50%" }}>
        <img style={{ width: "100%" }} src={img1} />
        <img style={{ width: "100%" }} src={img2} />
        <img style={{ width: "100%" }} src={img3} />
        <img style={{ width: "100%" }} src={img4} />
        <img style={{ width: "100%" }} src={img5} />
        <img style={{ width: "100%" }} src={img6} />
      </AutoPlaySwipeableViews>
    );
  }

  SwipeCtr() {
    return (
      <SwipeableViews style={{ width: "50%" }} enableMouseEvents="true">
        <img style={{ width: "100%" }} src={img6} />
        <img style={{ width: "100%" }} src={img5} />
        <img style={{ width: "100%" }} src={img4} />
        <img style={{ width: "100%" }} src={img3} />
        <img style={{ width: "100%" }} src={img2} />
        <img style={{ width: "100%" }} src={img1} />
      </SwipeableViews>
    );
  }

  getMenu() {
    return (
      <div>
        <Menu
          style={{ width: "100%", backgroundColor: "blue" }}
          onClick={this.onClick}
          mode="horizontal"
          openAnimation="slide-up"
        >
          <MenuItem className="App-menu" key="0">
            {<h4 style={{ color: "white" }}>Home</h4>}
          </MenuItem>
          <SubMenu
            className="App-menu"
            key="1"
            title={<h4 style={{ color: "white" }}>About us</h4>}
          >
            <MenuItem key="1-1">
              {<p1 style={{ color: "#E67965" }}>Events</p1>}
            </MenuItem>
            <MenuItem key="1-2">
              {<p1 style={{ color: "#E67965" }}>Gallery</p1>}
            </MenuItem>
            <SubMenu
              key="1-3"
              title={<p1 style={{ color: "#E67965" }}>News</p1>}
            >
              <MenuItem key="1-3-1">
                {<p1 style={{ color: "#E67965" }}>Projects</p1>}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem className="App-menu" key="2">
            {<h4 style={{ color: "white" }}>Menu & specials</h4>}
          </MenuItem>
          <MenuItem className="App-menu" key="3">
            {<h4 style={{ color: "white" }}>Gallery</h4>}
          </MenuItem>
          <MenuItem className="App-menu" key="4">
            {<h4 style={{ color: "white" }}>Contact us</h4>}
          </MenuItem>
        </Menu>
      </div>
    );
  }

  render() {
    for(var i in imageUrl){
      this.state({
        img:imageUrl[i]
      })
    }
    console.log("1234567890",this.state.img)
    return (
      <div style={{ width: "100%" }}>
        <header className="App-headerGg">
          <img className="App-logoGg" src={this.state.logoGg} />
        </header>
        <div>
          <Col between="xs">
          <Col between="xs">
            <Row xs={2}>{this.getMenu()}</Row>
            </Col>
            <div className="App-background">
              <Col xsOffset={9} xs={3}>
                <button className="App-button" onClick={activateLasers}>
                  <Col>
                    <h1 className="App-text">Hungry?</h1>
                    <h1 className="App-text">Order from</h1>
                    <h1 className="App-text">FOODdelivery</h1>
                  </Col>
                </button>
              </Col>
            </div>
            <Row>
              {this.SwipeAuto()}
              {this.SwipeCtr()}
              {this.SwipeCtr()}
              {this.SwipeAuto()}
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}
function activateLasers() {
  alert("You clicked Button");
}
export default App;
