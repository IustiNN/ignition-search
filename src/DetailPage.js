import React from 'react';
import { Link } from 'react-router';

export default class DetailPage extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      doTransform: false,
      position: null,
      color: null,
    };
  }

  onTransitionWillStart(data) {
    // Start position of the page
    this.setState({
      doTransform: true,
      position: data.clickedItemData.position,
    });
  }

  onTransitionDidEnd() {
    // Transition is done, do your stuff here
  }

  transitionManuallyStart() {
    // When this method exsits, `transition-appear-active` will not be added to the dom
    // we will define our animation manually.
    this.setState({
      position: {
        top: 0,
        height: '100%',
        left: 0,
        right: 0,
      },
      doTransform: true,
    });
  }

  transitionManuallyStop() {
    // When this method exsits, `transition-appear-active` will not be removed
    this.setState({
      doTransform: false,
    });
  }

  render() {
    return (
      <div
        style={{
          transform: this.state.doTransform ?
            `translate3d(0, ${this.state.position.top}px, 0)` :
              undefined,
          height: this.state.doTransform ?
            this.state.position.height : null,
          left: this.state.doTransform ?
            this.state.position.left : null,
          right: this.state.doTransform ?
            this.state.position.left : null,
        }}
        className="transition-item detail-page"
      >
        <Link to="/">
          Item {this.props.params.itemId}
        </Link>
        <h1>
          Detail page here
        </h1>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}