import React from 'react';
import s from './Statistics.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback}) => (
    <div className={s.buttonContainer}>
        {options.map(option => (
            <button onClick={onLeaveFeedback} key={option}>{option}</button>
      ))}
    </div>            
)

export default FeedbackOptions;
