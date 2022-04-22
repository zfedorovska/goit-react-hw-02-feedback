import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback}) => (
    <div className={s.buttonContainer}>
        {options.map(option => (
            <button onClick={onLeaveFeedback} key={option}>{option}</button>
      ))}
    </div>            
)

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;
