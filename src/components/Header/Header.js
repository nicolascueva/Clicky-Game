import React from "react";
import "./Header.css";
import Counter from "./Counter";

// By extending the React.Component class, Counter inherits functionality from it
class Header extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };

    // handleDecrement decreases this.state.count by 1
    //handleDecrement = () => {
    // We always use the setState method to update a component's state
    //this.setState({ count: this.state.count - 1 });
    //};

    // The render method returns the JSX that should be rendered
    render() {
        return (
            < Counter
                count={this.state.count}
                handleIncrement={this.handleIncrement}
            //handleDecrement={this.handleDecrement}
            />
        );
    }
}


export default Header;