import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
const { Component } = require("react");


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }
  
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }

    
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (<div>
      
      <Section title="Please leave feedback">
        <FeedbackOptions goodIncr={this.goodIncrement} neutralIncr={this.neutralIncrement} badIncr={this.badIncrement} />
      </Section>  

      <Section title="Statistics">
        {total >= 1 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="There is no feedback"/>}
      </Section>
      
    </div>
    );

  }
}

