import React, {Component} from 'react';
import ReactionsList from './ReactionsList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      timeButtonShown: null,
      reactions: [],
      hourlyWage: 0
    };
    this.queueShowButton();
  }

  clickedButton() {
    console.log('clicked it');
    const nextReaction = {
      start: this.state.timeButtonShown,
      end: Date.now()
    };
    const newReactions = this.state.reactions.concat(nextReaction);
    this.setState({
      reactions: newReactions,
      showButton: false
    });
    this.queueShowButton();
  }

  queueShowButton() {
    setTimeout(() => {
      this.setState({
        timeButtonShown: Date.now(),
        showButton: true
      });
    }, Math.random() * 5000);
  }

  hourlyWageChanged() {
    this.setState({
      hourlyWage: Number(this.hourlyWageInput.value)
    });
  }

  moneyMade() {
    return this.state.reactions.reduce((sum, time) => time.end - time.start, 0) * this.state.hourlyWage / 3600000;
  }

  render() {
    const money = this.moneyMade();
    return (
      <div>
        <h1>React!</h1>
        <p>
          {this.state.showButton ? <button onClick={this.clickedButton.bind(this)}>Click me</button> : 'Ready...'}
        </p>
        <ReactionsList reactions={this.state.reactions} />
        <p>
          Hourly wage: <input
            ref={el => this.hourlyWageInput = el}
            defaultValue={this.state.hourlyWage}
            onChange={this.hourlyWageChanged.bind(this)} />
        </p>
        <p>
          You have made ${money} by playing this at work
        </p>
      </div>
    );
  }
}

export default App;
