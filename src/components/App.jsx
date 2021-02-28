import React, { Component } from "react";
import Header from "./header.jsx";
import Main from "./main.jsx";
import Footer from "./footer.jsx";

import '../styles/styles.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;