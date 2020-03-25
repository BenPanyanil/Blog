import React, { Component } from "react";
import { articleData } from "./articleData";

const ContextAPI = React.createContext();
//Provider
//Consumer

class ContextProvider extends Component {
  state = {
    textColor: "var(--mainGrey)",
    bgColor: "var(--mainBlack)",
    articleData: articleData
  };

  render() {
    return (
      <ContextAPI.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ContextAPI.Provider>
    );
  }
}

const ContextConsumer = ContextAPI.Consumer;

export { ContextProvider, ContextConsumer };
