import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };
  }*/
  //this statement is equivalent to the above this.state statement
  state = { lat: null, errMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }
  //this is a helper method where we can apply the changes as a whole by just calling the function into it.
  renderContent() {
    if (this.state.errMessage && !this.state.latitude) {
      return <div>ERROR:{this.state.errMessage}</div>;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location  REQUEST" />;
  }
  //react says we have to define render
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
