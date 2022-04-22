import React from 'react';
import s from './Statistics.module.css';
import FeedbackOptions from './FeedbackOptions ';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class StatisticsClass extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleButtonClick = (evt) => {
        let option = evt.target.innerHTML.toLowerCase();
        this.setState((prevState) => {
            return {                
                [option]: prevState[option] + 1,
            }
        })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + bad + neutral;
    } 

    countPositiveFeedbackPercentage = () => {
        if (this.countTotalFeedback() === 0) {
            return 0;
        }
        else {
            return (Math.round((this.state.good / this.countTotalFeedback()) * 100));
        } 
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.handleButtonClick} />
                </Section>
                {this.countTotalFeedback() > 0 ? (
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()} />
                    </Section>) :
                    <Notification message="There is no feedback" />}
            </div>
        )
    }
}

export default StatisticsClass;