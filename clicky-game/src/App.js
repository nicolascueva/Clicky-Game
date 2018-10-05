import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import Directions from "./components/Directions";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  /*removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };*/

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Title>Clicky Game</Title>
        <Directions>Click on an image to earn points, but don't click on any more than once!</Directions>
        {this.state.friends.map(friend => (
          <FriendCard
            //removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
