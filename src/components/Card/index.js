import React from "react";
import './index.css';

class Card extends React.Component {
    constructor() {
      super();
      this.state = {
        show: false,
        count:0
      }
    }
    
    changeToggle = () => {    
      this.setState({
        show: !this.state.show
      })
    }
  
    handleChangeCount = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    render() { 
        const { cardNumber, date, userName} = this.props;
        return (
          <div className="card_container">
            <div>
              Card Number: 
              <input type={this.state.show ? "text" : "password"} value={cardNumber}/>
              <button onClick={this.changeToggle.bind(this)}>{this.state.show ? 'hide' : 'show'}</button>
              </div>
            <p>User Name: {userName}</p>
            <p>Date: {date}</p>
            <button onClick={this.handleChangeCount}>{this.state.count}</button>
          </div>
        )
      }
    }

    export default Card;