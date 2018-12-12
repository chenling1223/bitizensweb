import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import './App.css';
import GamePage from './components/gamepage';
import Footer from './components/footer';
import Sale from './components/sale';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return <div className="App">
            <style>
                {`
                .contianer{
                  margin: 0 !important;
                  padding: 0 !important;
                }

                .header-navbar{
                  position: fixed;
                  top: 0;
                  margin: 0 !important;
                  width: 100%;
                  height: 62px;
                  border: none !important;
                  background-color: #314B88 !important;
                  z-index: 20;
                }
                
                .navbar-brand{
                  padding: 0 !important;
                  height: 62px !important;
                  line-height: 62px;
                  font-weight: 700;
                  color: #FFFFFF !important;
                }

                .navbar-default .navbar-nav>li>a{
                  padding: 0 15px !important;
                  height: 62px !important;
                  line-height: 62px;
                  color: #FFFFFF !important;
                }

                .bg-content {
                    padding: 40px 10%;
                    text-align: left;
                }
              `}
            </style>
            <Navbar className="header-navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Bitizens-TRON</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/igo">IGO
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        ETH
                    </NavItem>
                </Nav>
            </Navbar>
            <Router>
                <div>
                <Route exact path="/" component={GamePage} />
                <Route path="/igo" component={Sale} />
                </div>
            </Router>          
            <Footer />
        </div>;
  }
}

export default App;
