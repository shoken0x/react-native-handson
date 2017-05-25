import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      showNum: false,
    };

    setInterval(() => {
      this.setState({
        showText: !this.state.showText,
        showNum: !this.state.showNum,
      });
    }, 3000);
  }

  render() {
    const text = this.state.showText? this.props.text : '';
    const num = this.state.showNum? this.props.num : '';
    return (
      <div>
        <span style={{color: "red"}}>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
          <p>{text}</p>
          <p>{num}</p>
        </span>
      </div>
    );
  }
}

export default Text;
