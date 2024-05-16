import React, { Component } from "react";

export default class condinal extends Component {
  constructor() {
    super();

    this.state = {
      isSubscribe: true,
    };
  }

  render() {
    /* if (this.state.isSubscribe) {
      return (
        <div>
          <h1>subscribed</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>subscribe</h1>
        </div>
      );
    } */
    /* this is ternary opreator */
    return this.state.isSubscribe ? (
      <h1>user has been subscribed</h1>
    ) : (
      <h1>user didnt subscribe</h1>
    );

    /*  return ( this is logical opreator
      this.state.isSubscribe && (
        <div>
          <h1>thios is false value</h1>
        </div>
      )
    ); */
  }
}
