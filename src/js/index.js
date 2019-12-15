import React from "react";
import ReactDOM from "react-dom";
import "../styles/scss/main.scss";

class App extends React.Component {
    render() {
        return (
            <section>
                <h1>Webpack <span>React Template</span></h1>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))