import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    this.addCount = this.addCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);

    //setInterval(() => {
    //  this.setState({
    //    count: this.state.count + 1
    //  });
    //}, 100);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  reduceCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

 render() {
   var list = [];
   var data = this.state;

   for(var i = 0; i < this.state.count; i++) {
     list.push(<span style={{color: "green"}}>{i+1}</span>);
     if(i % 18 == 0) {
       list.push(<br/>);
     }
   }
   return (
      <div>
        <button onClick={this.addCount}>
          addButton{this.state.count}
        </button>
        <button onClick={this.reduceCount}>
          reduceButton{this.state.count}
        </button>
        <p>total: {this.state.count}</p>
        <div style={{background: "black"}}>
          {list}
        </div>
      </div>
   );
 }
}

export default Button;
